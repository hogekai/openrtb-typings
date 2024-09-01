import {
  AdPosition,
  APIFramework,
  CompanionType,
  ContentDeliveryMethod,
  CreativeAttribute,
  PlaybackCessationMode,
  PlaybackMethod,
  Protocol,
  StartDelay,
  VideoLinearity,
  VideoPlacement,
} from "../enum/Enum";
import { Banner } from "./Banner";

export interface Video {
  mimes: string[];
  minduration?: number;
  maxduration?: number;
  protocols?: Protocol[];
  protocol?: Protocol; // Deprecated
  w?: number;
  h?: number;
  startdelay?: StartDelay;
  placement?: VideoPlacement;
  linearity?: VideoLinearity;
  skip?: 0 | 1;
  skipmin?: number;
  skipafter?: number;
  sequence?: number;
  battr?: CreativeAttribute[];
  maxextended?: number;
  minbitrate?: number;
  maxbitrate?: number;
  boxingallowed?: 0 | 1;
  playbackmethod?: PlaybackMethod[];
  playbackend?: PlaybackCessationMode;
  delivery?: ContentDeliveryMethod[];
  pos?: AdPosition;
  companionad?: Banner[];
  api?: APIFramework[];
  companiontype?: CompanionType[];
  ext?: Record<string, unknown>;
}
