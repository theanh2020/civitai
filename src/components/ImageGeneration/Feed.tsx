import {
  ActionIcon,
  Autocomplete,
  Card,
  Center,
  Group,
  Loader,
  Overlay,
  ScrollArea,
  Stack,
  Text,
  Tooltip,
  Transition,
  createStyles,
  HoverCard,
  TooltipProps,
  LoadingOverlay,
  Collapse,
  Box,
} from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import {
  IconCloudUpload,
  IconFilter,
  IconLayoutGrid,
  IconLayoutList,
  IconSearch,
  IconSortDescending2,
  IconSquareOff,
  IconTrash,
  IconWindowMaximize,
} from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { CreateVariantsModal } from '~/components/ImageGeneration/CreateVariantsModal';
import { FeedItem } from '~/components/ImageGeneration/FeedItem';
import { generationImageSelect } from '~/components/ImageGeneration/utils/generationImage.select';
import {
  useDeleteGenerationRequestImages,
  useGetGenerationRequests,
} from '~/components/ImageGeneration/utils/generationRequestHooks';
import { InViewLoader } from '~/components/InView/InViewLoader';
import { constants } from '~/server/common/constants';
import { Generation } from '~/server/services/generation/generation.types';
import { generationPanel } from '~/store/generation.store';
import { postImageTransmitter } from '~/store/post-image-transmitter.store';
import { trpc } from '~/utils/trpc';
import { isDefined } from '~/utils/type-guards';

type State = {
  layout: 'list' | 'grid';
  selectedItems: number[];
  variantModalOpened: boolean;
};

/**
 * - add search by prompt
 * - add sort by
 * - add filter by
 * - add toggle layout
 * - add infinite scroll
 * - handle variant generation
 * - handle post images
 */
export function Feed({
  requests,
  images: feed,
  isLoading,
  fetchNextPage,
  hasNextPage,
  isRefetching,
  isFetching,
  isError,
}: ReturnType<typeof useGetGenerationRequests>) {
  const [state, setState] = useState<State>({
    layout: 'grid',
    selectedItems: [],
    variantModalOpened: false,
  });

  const { classes } = useStyles();

  return (
    <Stack sx={{ position: 'relative', flex: 1, overflow: 'hidden' }} spacing={0}>
      {/* <div className={classes.searchPanel}>
        <HoverCard withArrow>
          <HoverCard.Target>
            <Overlay blur={1} opacity={0.3} color="#000" />
          </HoverCard.Target>
          <HoverCard.Dropdown maw={300}>
            <Text weight={500}>Coming soon!</Text>
            <Text size="xs">
              Search through your generated images by prompt, sort them, filter them by resources
              used, or switch your layout.
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <Card withBorder shadow="xl" p={0}>
          <Group spacing="xs">
            <Autocomplete
              placeholder="Search by prompt"
              data={[]}
              icon={<IconSearch size={14} />}
              sx={{ flex: 1 }}
              styles={{
                input: {
                  border: 0,
                },
              }}
            />
            <Group spacing={4} pr="md">
              <Tooltip label="Sort items">
                <ActionIcon size="xs">
                  <IconSortDescending2 />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Toggle filter toolbar">
                <ActionIcon size="xs">
                  <IconFilter />
                </ActionIcon>
              </Tooltip>
              <Tooltip label={state.layout === 'grid' ? 'List layout' : 'Grid layout'}>
                <ActionIcon
                  size="xs"
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      layout: current.layout === 'grid' ? 'list' : 'grid',
                    }))
                  }
                >
                  {state.layout === 'grid' ? <IconLayoutList /> : <IconLayoutGrid />}
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
        </Card>
      </div> */}

      <div className={classes.grid}>
        {feed
          .map((image) => {
            const selected = state.selectedItems.includes(image.id);
            const request = requests.find((request) =>
              request.images?.some((x) => x.id === image.id)
            );

            if (!request) return null;

            return (
              <FeedItem
                key={image.id}
                image={image}
                request={request}
                selected={selected}
                onCheckboxClick={({ image, checked }) => {
                  if (checked) {
                    setState((current) => ({
                      ...current,
                      selectedItems: [...current.selectedItems, image.id],
                    }));
                  } else {
                    setState((current) => ({
                      ...current,
                      selectedItems: current.selectedItems.filter((id) => id !== image.id),
                    }));
                  }
                }}
                onCreateVariantClick={(image) =>
                  setState((current) => ({
                    ...current,
                    variantModalOpened: true,
                    selectedItems: [image.id],
                  }))
                }
              />
            );
          })
          .filter(isDefined)}
        {hasNextPage && (
          <InViewLoader
            loadFn={fetchNextPage}
            loadCondition={!isRefetching}
            style={{ gridColumn: '1/-1' }}
          >
            <Center p="xl" sx={{ height: 36 }} mt="md">
              <Loader />
            </Center>
          </InViewLoader>
        )}
      </div>

      <CreateVariantsModal
        opened={state.variantModalOpened}
        onClose={() =>
          setState((current) => ({ ...current, variantModalOpened: false, selectedItems: [] }))
        }
      />
    </Stack>
  );
}

const tooltipProps: Omit<TooltipProps, 'children' | 'label'> = {
  withinPortal: true,
  withArrow: true,
  color: 'dark',
  zIndex: constants.imageGeneration.drawerZIndex + 1,
};

export function FloatingFeedActions({ images = [], children }: FloatingActionsProps) {
  const router = useRouter();
  const selected = generationImageSelect.useSelection();
  const handleDeselect = () => generationImageSelect.setSelected([]);

  const bulkDeleteImagesMutation = useDeleteGenerationRequestImages({
    onSuccess: () => {
      handleDeselect();
    },
  });

  const handleDeleteImages = () => {
    openConfirmModal({
      title: 'Delete images',
      children:
        'Are you sure that you want to delete the selected images? This is a destructive action and cannot be undone.',
      labels: { cancel: 'Cancel', confirm: 'Yes, delete them' },
      confirmProps: { color: 'red' },
      onConfirm: () => bulkDeleteImagesMutation.mutate({ ids: selected }),
      zIndex: constants.imageGeneration.drawerZIndex + 2,
      centered: true,
    });
  };

  const createPostMuation = trpc.post.create.useMutation();

  const loading = bulkDeleteImagesMutation.isLoading || createPostMuation.isLoading;

  const handlePostImages = async () => {
    const selectedImages = images.filter((x) => selected.includes(x.id));
    const files = (
      await Promise.all(
        selectedImages.map(async (image) => {
          const result = await fetch(image.url);
          if (!result.ok) return;
          const blob = await result.blob();
          const lastIndex = image.url.lastIndexOf('/');
          const name = image.url.substring(lastIndex + 1);
          return new File([blob], name, { type: blob.type });
        })
      )
    ).filter(isDefined);
    if (!files.length) return;
    const post = await createPostMuation.mutateAsync({});
    const pathname = `/posts/${post.id}/edit`;
    await router.push(pathname);
    postImageTransmitter.setData(files);
    generationPanel.close();
    handleDeselect();
  };

  const render = (
    <div style={{ position: 'relative' }}>
      <LoadingOverlay visible={loading} loaderProps={{ variant: 'bars', size: 'sm' }} />
      <Group spacing={6} position="right">
        <Text color="dimmed" size="xs" weight={500} inline>
          {selected.length} selected
        </Text>
        <Group spacing={4}>
          <Tooltip label="Deselect all" {...tooltipProps}>
            <ActionIcon size="md" onClick={handleDeselect} variant="light">
              <IconSquareOff size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete selected" {...tooltipProps}>
            <ActionIcon size="md" onClick={handleDeleteImages} color="red">
              <IconTrash size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Post images" {...tooltipProps}>
            <ActionIcon size="md" variant="light" onClick={handlePostImages}>
              <IconCloudUpload size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Upscale images" {...tooltipProps}>
            <span>
              <ActionIcon size="md" variant="light" disabled>
                <IconWindowMaximize size={20} />
              </ActionIcon>
            </span>
          </Tooltip>
        </Group>
      </Group>
    </div>
  );

  if (children) return children({ selected, render });
  if (!selected.length) return null;

  return render;
}

type FloatingActionsProps = {
  images?: Generation.Image[];
  children?: (args: { selected: number[]; render: JSX.Element }) => React.ReactElement;
};

const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateRows: 'masonry',
    gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
    gap: theme.spacing.xs,

    [`@media(max-width: ${theme.breakpoints.xs}px)`]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  searchPanel: {
    position: 'absolute',
    top: 4,
    zIndex: 10,
    marginLeft: -4,
    marginRight: -4,
    width: 'calc(100% + 8px)',
  },
}));
