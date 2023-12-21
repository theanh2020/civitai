import { Prisma, PrismaClient } from '@prisma/client';
import { CacheTTL } from '~/server/common/constants';
import { redis } from '~/server/redis/client';
import { fromJson, toJson } from '~/utils/json-helpers';
import { createLogger } from '~/utils/logging';
import { hashifyObject } from '~/utils/string-helpers';
import { isDefined } from '~/utils/type-guards';

const log = createLogger('cache-helpers', 'cyan');

type cachedQueryOptions = {
  ttl: number;
  tag: string | string[];
};
export function queryCache(db: PrismaClient, key: string, version?: string) {
  return async function <T extends object[]>(query: Prisma.Sql, options?: cachedQueryOptions) {
    if (options?.ttl === 0) return db.$queryRaw<T>(query);

    const cacheKey = [key, version, hashifyObject(query).toString()].filter(isDefined).join(':');
    const cachedData = await redis.get(cacheKey);
    if (cachedData && options?.ttl !== 0) return fromJson<T>(cachedData) ?? ([] as unknown as T);

    const result = await db.$queryRaw<T>(query);
    await redis.set(cacheKey, toJson(result), { EX: options?.ttl });

    if (options?.tag) await tagCacheKey(cacheKey, options?.tag);
    return result;
  };
}

async function tagCacheKey(key: string, tag: string | string[]) {
  const tags = Array.isArray(tag) ? tag : [tag];
  for (const tag of tags) {
    await redis.sAdd(`tag:${tag}`, key);
  }
}

export async function bustCacheTag(tag: string | string[]) {
  const tags = Array.isArray(tag) ? tag : [tag];
  for (const tag of tags) {
    const keys = await redis.sMembers(`tag:${tag}`);
    for (const key of keys) await redis.del(key);
    await redis.del(`tag:${tag}`);
  }
}

type CachedLookupOptions<T extends object> = {
  key: string;
  ids: number[];
  idKey: keyof T;
  lookupFn: (ids: number[]) => Promise<Record<string, object>>;
  ttl?: number;
};
export async function cachedArray<T extends object>({
  key,
  ids,
  idKey,
  lookupFn,
  ttl = CacheTTL.xs,
}: CachedLookupOptions<T>) {
  if (!ids.length) return [];
  const results = new Set<T>();
  const cacheJsons = await redis.hmGet(key, ids.map(String));
  const cacheArray = cacheJsons.filter((x) => x !== null).map((x) => JSON.parse(x));
  const cache = Object.fromEntries(cacheArray.map((x) => [x[idKey], x]));

  const cacheCutoff = Date.now() - ttl * 1000; // convert to ms (keeping ttl in seconds for redis similarity)
  const cacheMisses = new Set<(typeof ids)[0]>();
  for (const id of ids) {
    const cached = cache[id];
    if (cached && cached.cachedAt > cacheCutoff) {
      if (cached.notFound) continue;
      results.add(cached);
    } else cacheMisses.add(id);
  }

  // If we have cache misses, we need to fetch from the DB
  if (cacheMisses.size > 0) {
    log(`Cache miss for ${cacheMisses.size} ${key} items`);
    const dbResults = await lookupFn([...cacheMisses] as typeof ids);

    const toCache: Record<string, string> = {};
    const cachedAt = Date.now();
    for (const id of cacheMisses) {
      const result = dbResults[id];
      if (!result) {
        toCache[id] = JSON.stringify({ [idKey]: id, notFound: true, cachedAt });
        continue;
      }
      results.add(result as T);
      toCache[id] = JSON.stringify({ ...result, cachedAt });
    }

    // then cache the results
    if (Object.keys(toCache).length > 0) await redis.hSet(key, toCache);
  }

  return [...results];
}

export async function cachedObject<T extends object>(lookupOptions: CachedLookupOptions<T>) {
  const results = await cachedArray<T>(lookupOptions);
  return Object.fromEntries(
    results.map((x) => [(x[lookupOptions.idKey] as number | string).toString(), x])
  ) as Record<string, T>;
}
