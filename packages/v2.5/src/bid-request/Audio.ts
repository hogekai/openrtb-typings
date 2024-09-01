import {
  APIFramework,
  CompanionType,
  ContentDeliveryMethod,
  CreativeAttribute,
  FeedType,
  Protocol,
  VolumeNormalizationMode,
} from "../enum/Enum";
import { Banner } from "./Banner";

export interface Audio {
  mimes: string[];
  minduration?: number;
  maxduration?: number;
  protocols?: Protocol[];
  startdelay?: number;
  sequence?: number;
  battr?: CreativeAttribute[];
  maxextended?: number;
  minbitrate?: number;
  maxbitrate?: number;
  delivery?: ContentDeliveryMethod[];
  companionad?: Banner[];
  api?: APIFramework[];
  companiontype?: CompanionType[];
  maxseq?: number;
  feed?: FeedType;
  stitched?: 0 | 1;
  nvol?: VolumeNormalizationMode;
  ext?: Record<string, unknown>;
}
