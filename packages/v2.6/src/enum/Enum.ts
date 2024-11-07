export const BannerAdType = {
  XHTML_TEXT_AD: 1,
  XHTML_BANNER_AD: 2,
  JAVASCRIPT_AD: 3,
  IFRAME: 4,
} as const;
export type BannerAdType = (typeof BannerAdType)[keyof typeof BannerAdType];

export const CreativeAttribute = {
  AUDIO_AUTO_PLAY: 1,
  AUDIO_USER_INITIATED: 2,
  EXPANDABLE_AUTOMATIC: 3,
  EXPANDABLE_USER_CLICK: 4,
  EXPANDABLE_USER_ROLLOVER: 5,
  IN_BANNER_VIDEO_AUTO_PLAY: 6,
  IN_BANNER_VIDEO_USER_INITIATED: 7,
  POP: 8,
  PROVOCATIVE_SUGGESTIVE_IMAGERY: 9,
  SHAKY_FLASHING_FLICKERING: 10,
  SURVEYS: 11,
  TEXT_ONLY: 12,
  USER_INTERACTIVE: 13,
  WINDOWS_DIALOG_ALERT: 14,
  AUDIO_ON_OFF_BUTTON: 15,
  SKIPPABLE_BUTTON: 16,
  ADOBE_FLASH: 17,
} as const;
export type CreativeAttribute =
  (typeof CreativeAttribute)[keyof typeof CreativeAttribute];

export const AdPosition = {
  UNKNOWN: 0,
  ABOVE_THE_FOLD: 1,
  DEPRECATED_MAY_OR_MAY_NOT_BE_INITIALLY_VISIBLE: 2,
  BELOW_THE_FOLD: 3,
  HEADER: 4,
  FOOTER: 5,
  SIDEBAR: 6,
  FULL_SCREEN: 7,
} as const;
export type AdPosition = (typeof AdPosition)[keyof typeof AdPosition];

export const ExpandableDirection = {
  LEFT: 1,
  RIGHT: 2,
  UP: 3,
  DOWN: 4,
  FULL_SCREEN: 5,
} as const;
export type ExpandableDirection =
  (typeof ExpandableDirection)[keyof typeof ExpandableDirection];

export const APIFramework = {
  VPAID_1_0: 1,
  VPAID_2_0: 2,
  MRAID_1: 3,
  ORMMA: 4,
  MRAID_2: 5,
  MRAID_3: 6,
} as const;
export type APIFramework = (typeof APIFramework)[keyof typeof APIFramework];

export const VideoLinearity = {
  LINEAR_IN_STREAM: 1,
  NON_LINEAR_OVERLAY: 2,
} as const;
export type VideoLinearity =
  (typeof VideoLinearity)[keyof typeof VideoLinearity];

export const Protocol = {
  VAST_1_0: 1,
  VAST_2_0: 2,
  VAST_3_0: 3,
  VAST_1_0_WRAPPER: 4,
  VAST_2_0_WRAPPER: 5,
  VAST_3_0_WRAPPER: 6,
  VAST_4_0: 7,
  VAST_4_0_WRAPPER: 8,
  DAAST_1_0: 9,
  DAAST_1_0_WRAPPER: 10,
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const VideoPlacement = {
  IN_STREAM: 1,
  IN_BANNER: 2,
  IN_ARTICLE: 3,
  IN_FEED: 4,
  INTERSTITIAL_SLIDER_FLOATING: 5,
} as const;
export type VideoPlacement =
  (typeof VideoPlacement)[keyof typeof VideoPlacement];

export const PlaybackMethod = {
  PAGE_LOAD_SOUND_ON: 1,
  PAGE_LOAD_SOUND_OFF: 2,
  CLICK_SOUND_ON: 3,
  MOUSEOVER_SOUND_ON: 4,
  VIEWPORT_ENTER_SOUND_ON: 5,
  VIEWPORT_ENTER_SOUND_OFF: 6,
} as const;
export type PlaybackMethod =
  (typeof PlaybackMethod)[keyof typeof PlaybackMethod];

export const PlaybackCessationMode = {
  VIDEO_COMPLETION_OR_USER_TERMINATED: 1,
  VIEWPORT_EXIT_OR_USER_TERMINATED: 2,
  VIEWPORT_EXIT_CONTINUES_AS_FLOATING_SLIDER_UNTIL_COMPLETION_OR_USER_TERMINATED: 3,
} as const;
export type PlaybackCessationMode =
  (typeof PlaybackCessationMode)[keyof typeof PlaybackCessationMode];

export const StartDelay = {
  MID_ROLL: (n: number) => n > 0,
  PRE_ROLL: 0,
  GENERIC_MID_ROLL: -1,
  GENERIC_POST_ROLL: -2,
} as const;
export type StartDelay = {
  [K in keyof typeof StartDelay]: (typeof StartDelay)[K] extends (
    n: number
  ) => boolean
    ? number
    : (typeof StartDelay)[K];
}[keyof typeof StartDelay];

export const ProductionQuality = {
  UNKNOWN: 0,
  PROFESSIONALLY_PRODUCED: 1,
  PROSUMER: 2,
  USER_GENERATED: 3,
} as const;
export type ProductionQuality =
  (typeof ProductionQuality)[keyof typeof ProductionQuality];

export const CompanionType = {
  STATIC_RESOURCE: 1,
  HTML_RESOURCE: 2,
  IFRAME_RESOURCE: 3,
} as const;
export type CompanionType = (typeof CompanionType)[keyof typeof CompanionType];

export const ContentDeliveryMethod = {
  STREAMING: 1,
  PROGRESSIVE: 2,
  DOWNLOAD: 3,
} as const;
export type ContentDeliveryMethod =
  (typeof ContentDeliveryMethod)[keyof typeof ContentDeliveryMethod];

export const FeedType = {
  MUSIC_SERVICE: 1,
  FM_AM_BROADCAST: 2,
  PODCAST: 3,
} as const;
export type FeedType = (typeof FeedType)[keyof typeof FeedType];

export const VolumeNormalizationMode = {
  NONE: 0,
  AD_VOLUME_AVERAGE_NORMALIZED_TO_CONTENT: 1,
  AD_VOLUME_PEAK_NORMALIZED_TO_CONTENT: 2,
  AD_LOUDNESS_NORMALIZED_TO_CONTENT: 3,
  CUSTOM_VOLUME_NORMALIZATION: 4,
} as const;
export type VolumeNormalizationMode =
  (typeof VolumeNormalizationMode)[keyof typeof VolumeNormalizationMode];

export const ContentContext = {
  VIDEO: 1,
  GAME: 2,
  MUSIC: 3,
  APPLICATION: 4,
  TEXT: 5,
  OTHER: 6,
  UNKNOWN: 7,
} as const;
export type ContentContext =
  (typeof ContentContext)[keyof typeof ContentContext];

export const IQGMediaRating = {
  ALL_AUDIENCES: 1,
  EVERYONE_OVER_12: 2,
  MATURE_AUDIENCES: 3,
} as const;
export type IQGMediaRating =
  (typeof IQGMediaRating)[keyof typeof IQGMediaRating];

export const LocationType = {
  GPS_LOCATION_SERVICES: 1,
  IP_ADDRESS: 2,
  USER_PROVIDED: 3,
} as const;
export type LocationType = (typeof LocationType)[keyof typeof LocationType];

export const DeviceType = {
  MOBILE_TABLET: 1,
  PERSONAL_COMPUTER: 2,
  CONNECTED_TV: 3,
  PHONE: 4,
  TABLET: 5,
  CONNECTED_DEVICE: 6,
  SET_TOP_BOX: 7,
} as const;
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

export const ConnectionType = {
  UNKNOWN: 0,
  ETHERNET: 1,
  WIFI: 2,
  CELLULAR_NETWORK_UNKNOWN_GENERATION: 3,
  CELLULAR_NETWORK_2G: 4,
  CELLULAR_NETWORK_3G: 5,
  CELLULAR_NETWORK_4G: 6,
} as const;
export type ConnectionType =
  (typeof ConnectionType)[keyof typeof ConnectionType];

export const IPLocationService = {
  IP2LOCATION: 1,
  NEUSTAR_QUOVA: 2,
  MAXMIND: 3,
  NETACUITY_DIGITAL_ELEMENT: 4,
} as const;
export type IPLocationService =
  (typeof IPLocationService)[keyof typeof IPLocationService];

export const NoBidReasonCode = {
  UNKNOWN_ERROR: 0,
  TECHNICAL_ERROR: 1,
  INVALID_REQUEST: 2,
  KNOWN_WEB_SPIDER: 3,
  SUSPECTED_NON_HUMAN_TRAFFIC: 4,
  CLOUD_DATA_CENTER_PROXY_IP: 5,
  UNSUPPORTED_DEVICE: 6,
  BLOCKED_PUBLISHER_OR_SITE: 7,
  UNMATCHED_USER: 8,
  DAILY_READER_CAP_MET: 9,
  DAILY_DOMAIN_CAP_MET: 10,
} as const;
export type NoBidReasonCode =
  (typeof NoBidReasonCode)[keyof typeof NoBidReasonCode];

export const LossReasonCode = {
  BID_WON: 0,
  INTERNAL_ERROR: 1,
  IMPRESSION_OPPORTUNITY_EXPIRED: 2,
  INVALID_BID_RESPONSE: 3,
  INVALID_DEAL_ID: 4,
  INVALID_AUCTION_ID: 5,
  INVALID_ADVERTISER_DOMAIN: 6,
  MISSING_MARKUP: 7,
  MISSING_CREATIVE_ID: 8,
  MISSING_BID_PRICE: 9,
  MISSING_MINIMUM_CREATIVE_APPROVAL_DATA: 10,
  BID_BELOW_AUCTION_FLOOR: 100,
  BID_BELOW_DEAL_FLOOR: 101,
  LOST_TO_HIGHER_BID: 102,
  LOST_TO_PMP_DEAL_BID: 103,
  BUYER_SEAT_BLOCKED: 104,
  CREATIVE_FILTERED_GENERAL: 200,
  CREATIVE_FILTERED_PENDING_PROCESSING: 201,
  CREATIVE_FILTERED_DISAPPROVED: 202,
  CREATIVE_FILTERED_SIZE_NOT_ALLOWED: 203,
  CREATIVE_FILTERED_INCORRECT_FORMAT: 204,
  CREATIVE_FILTERED_ADVERTISER_EXCLUSIONS: 205,
  CREATIVE_FILTERED_APP_BUNDLE_EXCLUSIONS: 206,
  CREATIVE_FILTERED_NOT_SECURE: 207,
  CREATIVE_FILTERED_LANGUAGE_EXCLUSIONS: 208,
  CREATIVE_FILTERED_CATEGORY_EXCLUSIONS: 209,
  CREATIVE_FILTERED_ATTRIBUTE_EXCLUSIONS: 210,
  CREATIVE_FILTERED_AD_TYPE_EXCLUSIONS: 211,
  CREATIVE_FILTERED_ANIMATION_TOO_LONG: 212,
  CREATIVE_FILTERED_NOT_ALLOWED_IN_PMP_DEAL: 213,
} as const;
export type LossReasonCode =
  (typeof LossReasonCode)[keyof typeof LossReasonCode];

  /**
 * Consent categories for privacy regulations
 * Each value represents a specific type of user consent
 */
export const ConsentCategory = {
  /**
   * General consent for data processing
   */
  GENERAL_DATA_PROCESSING: 1,
  
  /**
   * Consent for personalized advertising
   */
  PERSONALIZED_ADVERTISING: 2,
  
  /**
   * Consent for sharing data with third parties
   */
  THIRD_PARTY_SHARING: 3,
  
  /**
   * Consent for precise geolocation data
   */
  PRECISE_GEOLOCATION: 4,
  
  /**
   * Consent for device identification
   */
  DEVICE_IDENTIFICATION: 5,
  
  /**
   * Consent for offline data matching
   */
  OFFLINE_DATA_MATCHING: 6,
  
  /**
   * Consent for linking devices
   */
  DEVICE_LINKING: 7,
  
  /**
   * Consent for automated decision making
   */
  AUTOMATED_DECISION_MAKING: 8,
  
  /**
   * Consent for sensitive data processing
   */
  SENSITIVE_DATA_PROCESSING: 9,
  
  /**
   * Consent for data retention
   */
  DATA_RETENTION: 10
} as const;

/**
 * Extract numeric literal types from ConsentCategory
 */
export type ConsentCategoryType = typeof ConsentCategory[keyof typeof ConsentCategory];

/**
 * Data disclosure levels for privacy requirements
 * Each value represents a specific level of data disclosure permitted
 */
export const DataDisclosure = {
  /**
   * No data disclosure permitted
   */
  NO_DISCLOSURE: 0,
  
  /**
   * Disclosure permitted for basic bid processing only
   */
  BASIC_BID_PROCESSING: 1,
  
  /**
   * Disclosure permitted for bid optimization
   */
  BID_OPTIMIZATION: 2,
  
  /**
   * Disclosure permitted for delivery optimization
   */
  DELIVERY_OPTIMIZATION: 3,
  
  /**
   * Disclosure permitted for performance analysis
   */
  PERFORMANCE_ANALYSIS: 4,
  
  /**
   * Disclosure permitted for user segmentation
   */
  USER_SEGMENTATION: 5,
  
  /**
   * Disclosure permitted for model training
   */
  MODEL_TRAINING: 6,
  
  /**
   * Full disclosure permitted
   */
  FULL_DISCLOSURE: 7
} as const;

/**
 * Extract numeric literal types from DataDisclosure
 */
export type DataDisclosureType = typeof DataDisclosure[keyof typeof DataDisclosure];