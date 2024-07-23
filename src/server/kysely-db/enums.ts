export const StripeConnectStatus = {
  PendingOnboarding: 'PendingOnboarding',
  Approved: 'Approved',
  PendingVerification: 'PendingVerification',
  Rejected: 'Rejected',
} as const;
export type StripeConnectStatus = (typeof StripeConnectStatus)[keyof typeof StripeConnectStatus];
export const BuzzWithdrawalRequestStatus = {
  Requested: 'Requested',
  Canceled: 'Canceled',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Reverted: 'Reverted',
  Transferred: 'Transferred',
  ExternallyResolved: 'ExternallyResolved',
} as const;
export type BuzzWithdrawalRequestStatus =
  (typeof BuzzWithdrawalRequestStatus)[keyof typeof BuzzWithdrawalRequestStatus];
export const RewardsEligibility = {
  Eligible: 'Eligible',
  Ineligible: 'Ineligible',
  Protected: 'Protected',
} as const;
export type RewardsEligibility = (typeof RewardsEligibility)[keyof typeof RewardsEligibility];
export const UserEngagementType = {
  Follow: 'Follow',
  Hide: 'Hide',
  Block: 'Block',
} as const;
export type UserEngagementType = (typeof UserEngagementType)[keyof typeof UserEngagementType];
export const LinkType = {
  Sponsorship: 'Sponsorship',
  Social: 'Social',
  Other: 'Other',
} as const;
export type LinkType = (typeof LinkType)[keyof typeof LinkType];
export const ModelType = {
  Checkpoint: 'Checkpoint',
  TextualInversion: 'TextualInversion',
  Hypernetwork: 'Hypernetwork',
  AestheticGradient: 'AestheticGradient',
  LORA: 'LORA',
  LoCon: 'LoCon',
  DoRA: 'DoRA',
  Controlnet: 'Controlnet',
  Upscaler: 'Upscaler',
  MotionModule: 'MotionModule',
  VAE: 'VAE',
  Poses: 'Poses',
  Wildcards: 'Wildcards',
  Workflows: 'Workflows',
  Other: 'Other',
} as const;
export type ModelType = (typeof ModelType)[keyof typeof ModelType];
export const ImportStatus = {
  Pending: 'Pending',
  Processing: 'Processing',
  Failed: 'Failed',
  Completed: 'Completed',
} as const;
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];
export const ModelStatus = {
  Draft: 'Draft',
  Training: 'Training',
  Published: 'Published',
  Scheduled: 'Scheduled',
  Unpublished: 'Unpublished',
  UnpublishedViolation: 'UnpublishedViolation',
  GatherInterest: 'GatherInterest',
  Deleted: 'Deleted',
} as const;
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];
export const TrainingStatus = {
  Pending: 'Pending',
  Submitted: 'Submitted',
  Paused: 'Paused',
  Denied: 'Denied',
  Processing: 'Processing',
  InReview: 'InReview',
  Failed: 'Failed',
  Approved: 'Approved',
} as const;
export type TrainingStatus = (typeof TrainingStatus)[keyof typeof TrainingStatus];
export const CommercialUse = {
  None: 'None',
  Image: 'Image',
  RentCivit: 'RentCivit',
  Rent: 'Rent',
  Sell: 'Sell',
} as const;
export type CommercialUse = (typeof CommercialUse)[keyof typeof CommercialUse];
export const CheckpointType = {
  Trained: 'Trained',
  Merge: 'Merge',
} as const;
export type CheckpointType = (typeof CheckpointType)[keyof typeof CheckpointType];
export const ModelUploadType = {
  Created: 'Created',
  Trained: 'Trained',
} as const;
export type ModelUploadType = (typeof ModelUploadType)[keyof typeof ModelUploadType];
export const ModelModifier = {
  Archived: 'Archived',
  TakenDown: 'TakenDown',
} as const;
export type ModelModifier = (typeof ModelModifier)[keyof typeof ModelModifier];
export const ContentType = {
  Image: 'Image',
  Character: 'Character',
  Text: 'Text',
  Audio: 'Audio',
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType];
export const ModelEngagementType = {
  Favorite: 'Favorite',
  Hide: 'Hide',
  Mute: 'Mute',
  Notify: 'Notify',
} as const;
export type ModelEngagementType = (typeof ModelEngagementType)[keyof typeof ModelEngagementType];
export const ModelVersionSponsorshipSettingsType = {
  FixedPrice: 'FixedPrice',
  Bidding: 'Bidding',
} as const;
export type ModelVersionSponsorshipSettingsType =
  (typeof ModelVersionSponsorshipSettingsType)[keyof typeof ModelVersionSponsorshipSettingsType];
export const ModelVersionMonetizationType = {
  PaidAccess: 'PaidAccess',
  PaidEarlyAccess: 'PaidEarlyAccess',
  PaidGeneration: 'PaidGeneration',
  CivitaiClubOnly: 'CivitaiClubOnly',
  MySubscribersOnly: 'MySubscribersOnly',
  Sponsored: 'Sponsored',
} as const;
export type ModelVersionMonetizationType =
  (typeof ModelVersionMonetizationType)[keyof typeof ModelVersionMonetizationType];
export const ModelVersionEngagementType = {
  Notify: 'Notify',
} as const;
export type ModelVersionEngagementType =
  (typeof ModelVersionEngagementType)[keyof typeof ModelVersionEngagementType];
export const ModelHashType = {
  AutoV1: 'AutoV1',
  AutoV2: 'AutoV2',
  AutoV3: 'AutoV3',
  SHA256: 'SHA256',
  CRC32: 'CRC32',
  BLAKE3: 'BLAKE3',
} as const;
export type ModelHashType = (typeof ModelHashType)[keyof typeof ModelHashType];
export const ScanResultCode = {
  Pending: 'Pending',
  Success: 'Success',
  Danger: 'Danger',
  Error: 'Error',
} as const;
export type ScanResultCode = (typeof ScanResultCode)[keyof typeof ScanResultCode];
export const ModelFileVisibility = {
  Sensitive: 'Sensitive',
  Private: 'Private',
  Public: 'Public',
} as const;
export type ModelFileVisibility = (typeof ModelFileVisibility)[keyof typeof ModelFileVisibility];
export const MetricTimeframe = {
  Day: 'Day',
  Week: 'Week',
  Month: 'Month',
  Year: 'Year',
  AllTime: 'AllTime',
} as const;
export type MetricTimeframe = (typeof MetricTimeframe)[keyof typeof MetricTimeframe];
export const AssociationType = {
  Suggested: 'Suggested',
} as const;
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];
export const ReportReason = {
  TOSViolation: 'TOSViolation',
  NSFW: 'NSFW',
  Ownership: 'Ownership',
  AdminAttention: 'AdminAttention',
  Claim: 'Claim',
  CSAM: 'CSAM',
} as const;
export type ReportReason = (typeof ReportReason)[keyof typeof ReportReason];
export const ReportStatus = {
  Pending: 'Pending',
  Processing: 'Processing',
  Actioned: 'Actioned',
  Unactioned: 'Unactioned',
} as const;
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus];
export const ReviewReactions = {
  Like: 'Like',
  Dislike: 'Dislike',
  Laugh: 'Laugh',
  Cry: 'Cry',
  Heart: 'Heart',
} as const;
export type ReviewReactions = (typeof ReviewReactions)[keyof typeof ReviewReactions];
export const ImageGenerationProcess = {
  txt2img: 'txt2img',
  txt2imgHiRes: 'txt2imgHiRes',
  img2img: 'img2img',
  inpainting: 'inpainting',
} as const;
export type ImageGenerationProcess =
  (typeof ImageGenerationProcess)[keyof typeof ImageGenerationProcess];
export const NsfwLevel = {
  None: 'None',
  Soft: 'Soft',
  Mature: 'Mature',
  X: 'X',
  Blocked: 'Blocked',
} as const;
export type NsfwLevel = (typeof NsfwLevel)[keyof typeof NsfwLevel];
export const ImageIngestionStatus = {
  Pending: 'Pending',
  Scanned: 'Scanned',
  Error: 'Error',
  Blocked: 'Blocked',
  NotFound: 'NotFound',
} as const;
export type ImageIngestionStatus = (typeof ImageIngestionStatus)[keyof typeof ImageIngestionStatus];
export const MediaType = {
  image: 'image',
  video: 'video',
  audio: 'audio',
} as const;
export type MediaType = (typeof MediaType)[keyof typeof MediaType];
export const ImageEngagementType = {
  Favorite: 'Favorite',
  Hide: 'Hide',
} as const;
export type ImageEngagementType = (typeof ImageEngagementType)[keyof typeof ImageEngagementType];
export const ImageOnModelType = {
  Example: 'Example',
  Training: 'Training',
} as const;
export type ImageOnModelType = (typeof ImageOnModelType)[keyof typeof ImageOnModelType];
export const TagTarget = {
  Model: 'Model',
  Question: 'Question',
  Image: 'Image',
  Post: 'Post',
  Tag: 'Tag',
  Article: 'Article',
  Bounty: 'Bounty',
  Collection: 'Collection',
} as const;
export type TagTarget = (typeof TagTarget)[keyof typeof TagTarget];
export const TagType = {
  UserGenerated: 'UserGenerated',
  Label: 'Label',
  Moderation: 'Moderation',
  System: 'System',
} as const;
export type TagType = (typeof TagType)[keyof typeof TagType];
export const TagsOnTagsType = {
  Parent: 'Parent',
  Replace: 'Replace',
  Append: 'Append',
} as const;
export type TagsOnTagsType = (typeof TagsOnTagsType)[keyof typeof TagsOnTagsType];
export const TagSource = {
  User: 'User',
  Rekognition: 'Rekognition',
  WD14: 'WD14',
  Computed: 'Computed',
} as const;
export type TagSource = (typeof TagSource)[keyof typeof TagSource];
export const PartnerPricingModel = {
  Duration: 'Duration',
  PerImage: 'PerImage',
} as const;
export type PartnerPricingModel = (typeof PartnerPricingModel)[keyof typeof PartnerPricingModel];
export const ApiKeyType = {
  System: 'System',
  User: 'User',
} as const;
export type ApiKeyType = (typeof ApiKeyType)[keyof typeof ApiKeyType];
export const KeyScope = {
  Read: 'Read',
  Write: 'Write',
  Generate: 'Generate',
} as const;
export type KeyScope = (typeof KeyScope)[keyof typeof KeyScope];
export const TagEngagementType = {
  Hide: 'Hide',
  Follow: 'Follow',
  Allow: 'Allow',
} as const;
export type TagEngagementType = (typeof TagEngagementType)[keyof typeof TagEngagementType];
export const CosmeticType = {
  Badge: 'Badge',
  NamePlate: 'NamePlate',
  ContentDecoration: 'ContentDecoration',
  ProfileDecoration: 'ProfileDecoration',
  ProfileBackground: 'ProfileBackground',
} as const;
export type CosmeticType = (typeof CosmeticType)[keyof typeof CosmeticType];
export const CosmeticSource = {
  Trophy: 'Trophy',
  Purchase: 'Purchase',
  Event: 'Event',
  Membership: 'Membership',
  Claim: 'Claim',
} as const;
export type CosmeticSource = (typeof CosmeticSource)[keyof typeof CosmeticSource];
export const CosmeticEntity = {
  Model: 'Model',
  Image: 'Image',
  Article: 'Article',
  Post: 'Post',
} as const;
export type CosmeticEntity = (typeof CosmeticEntity)[keyof typeof CosmeticEntity];
export const ArticleEngagementType = {
  Favorite: 'Favorite',
  Hide: 'Hide',
} as const;
export type ArticleEngagementType =
  (typeof ArticleEngagementType)[keyof typeof ArticleEngagementType];
export const GenerationSchedulers = {
  EulerA: 'EulerA',
  Euler: 'Euler',
  LMS: 'LMS',
  Heun: 'Heun',
  DPM2: 'DPM2',
  DPM2A: 'DPM2A',
  DPM2SA: 'DPM2SA',
  DPM2M: 'DPM2M',
  DPMSDE: 'DPMSDE',
  DPMFast: 'DPMFast',
  DPMAdaptive: 'DPMAdaptive',
  LMSKarras: 'LMSKarras',
  DPM2Karras: 'DPM2Karras',
  DPM2AKarras: 'DPM2AKarras',
  DPM2SAKarras: 'DPM2SAKarras',
  DPM2MKarras: 'DPM2MKarras',
  DPMSDEKarras: 'DPMSDEKarras',
  DDIM: 'DDIM',
} as const;
export type GenerationSchedulers = (typeof GenerationSchedulers)[keyof typeof GenerationSchedulers];
export const CollectionWriteConfiguration = {
  Private: 'Private',
  Public: 'Public',
  Review: 'Review',
} as const;
export type CollectionWriteConfiguration =
  (typeof CollectionWriteConfiguration)[keyof typeof CollectionWriteConfiguration];
export const CollectionReadConfiguration = {
  Private: 'Private',
  Public: 'Public',
  Unlisted: 'Unlisted',
} as const;
export type CollectionReadConfiguration =
  (typeof CollectionReadConfiguration)[keyof typeof CollectionReadConfiguration];
export const CollectionType = {
  Model: 'Model',
  Article: 'Article',
  Post: 'Post',
  Image: 'Image',
} as const;
export type CollectionType = (typeof CollectionType)[keyof typeof CollectionType];
export const CollectionMode = {
  Contest: 'Contest',
  Bookmark: 'Bookmark',
} as const;
export type CollectionMode = (typeof CollectionMode)[keyof typeof CollectionMode];
export const CollectionItemStatus = {
  ACCEPTED: 'ACCEPTED',
  REVIEW: 'REVIEW',
  REJECTED: 'REJECTED',
} as const;
export type CollectionItemStatus = (typeof CollectionItemStatus)[keyof typeof CollectionItemStatus];
export const CollectionContributorPermission = {
  VIEW: 'VIEW',
  ADD: 'ADD',
  ADD_REVIEW: 'ADD_REVIEW',
  MANAGE: 'MANAGE',
} as const;
export type CollectionContributorPermission =
  (typeof CollectionContributorPermission)[keyof typeof CollectionContributorPermission];
export const HomeBlockType = {
  Collection: 'Collection',
  Announcement: 'Announcement',
  Leaderboard: 'Leaderboard',
  Social: 'Social',
  Event: 'Event',
} as const;
export type HomeBlockType = (typeof HomeBlockType)[keyof typeof HomeBlockType];
export const Currency = {
  USD: 'USD',
  BUZZ: 'BUZZ',
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency];
export const BountyType = {
  ModelCreation: 'ModelCreation',
  LoraCreation: 'LoraCreation',
  EmbedCreation: 'EmbedCreation',
  DataSetCreation: 'DataSetCreation',
  DataSetCaption: 'DataSetCaption',
  ImageCreation: 'ImageCreation',
  VideoCreation: 'VideoCreation',
  Other: 'Other',
} as const;
export type BountyType = (typeof BountyType)[keyof typeof BountyType];
export const BountyMode = {
  Individual: 'Individual',
  Split: 'Split',
} as const;
export type BountyMode = (typeof BountyMode)[keyof typeof BountyMode];
export const BountyEntryMode = {
  Open: 'Open',
  BenefactorsOnly: 'BenefactorsOnly',
} as const;
export type BountyEntryMode = (typeof BountyEntryMode)[keyof typeof BountyEntryMode];
export const BountyEngagementType = {
  Favorite: 'Favorite',
  Track: 'Track',
} as const;
export type BountyEngagementType = (typeof BountyEngagementType)[keyof typeof BountyEngagementType];
export const CsamReportType = {
  Image: 'Image',
  TrainingData: 'TrainingData',
} as const;
export type CsamReportType = (typeof CsamReportType)[keyof typeof CsamReportType];
export const Availability = {
  Public: 'Public',
  Unsearchable: 'Unsearchable',
  Private: 'Private',
  EarlyAccess: 'EarlyAccess',
} as const;
export type Availability = (typeof Availability)[keyof typeof Availability];
export const EntityCollaboratorStatus = {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected',
} as const;
export type EntityCollaboratorStatus =
  (typeof EntityCollaboratorStatus)[keyof typeof EntityCollaboratorStatus];
export const ClubAdminPermission = {
  ManageMemberships: 'ManageMemberships',
  ManageTiers: 'ManageTiers',
  ManagePosts: 'ManagePosts',
  ManageClub: 'ManageClub',
  ManageResources: 'ManageResources',
  ViewRevenue: 'ViewRevenue',
  WithdrawRevenue: 'WithdrawRevenue',
} as const;
export type ClubAdminPermission = (typeof ClubAdminPermission)[keyof typeof ClubAdminPermission];
export const ChatMemberStatus = {
  Invited: 'Invited',
  Joined: 'Joined',
  Ignored: 'Ignored',
  Left: 'Left',
  Kicked: 'Kicked',
} as const;
export type ChatMemberStatus = (typeof ChatMemberStatus)[keyof typeof ChatMemberStatus];
export const ChatMessageType = {
  Markdown: 'Markdown',
  Image: 'Image',
  Video: 'Video',
  Audio: 'Audio',
  Embed: 'Embed',
} as const;
export type ChatMessageType = (typeof ChatMessageType)[keyof typeof ChatMessageType];
export const PurchasableRewardUsage = {
  SingleUse: 'SingleUse',
  MultiUse: 'MultiUse',
} as const;
export type PurchasableRewardUsage =
  (typeof PurchasableRewardUsage)[keyof typeof PurchasableRewardUsage];
export const EntityType = {
  Image: 'Image',
  Post: 'Post',
  Article: 'Article',
  Bounty: 'Bounty',
  BountyEntry: 'BountyEntry',
  ModelVersion: 'ModelVersion',
  Model: 'Model',
  Collection: 'Collection',
} as const;
export type EntityType = (typeof EntityType)[keyof typeof EntityType];
export const JobQueueType = {
  CleanUp: 'CleanUp',
  UpdateMetrics: 'UpdateMetrics',
  UpdateNsfwLevel: 'UpdateNsfwLevel',
  UpdateSearchIndex: 'UpdateSearchIndex',
  CleanIfEmpty: 'CleanIfEmpty',
} as const;
export type JobQueueType = (typeof JobQueueType)[keyof typeof JobQueueType];
export const VaultItemStatus = {
  Pending: 'Pending',
  Stored: 'Stored',
  Failed: 'Failed',
} as const;
export type VaultItemStatus = (typeof VaultItemStatus)[keyof typeof VaultItemStatus];
export const RedeemableCodeType = {
  Buzz: 'Buzz',
  Membership: 'Membership',
} as const;
export type RedeemableCodeType = (typeof RedeemableCodeType)[keyof typeof RedeemableCodeType];
export const ToolType = {
  Image: 'Image',
  Video: 'Video',
  MotionCapture: 'MotionCapture',
  Upscalers: 'Upscalers',
  Audio: 'Audio',
  Compute: 'Compute',
  GameEngines: 'GameEngines',
  Editor: 'Editor',
} as const;
export type ToolType = (typeof ToolType)[keyof typeof ToolType];
export const TechniqueType = {
  Image: 'Image',
  Video: 'Video',
} as const;
export type TechniqueType = (typeof TechniqueType)[keyof typeof TechniqueType];
