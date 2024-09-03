import { IABCategory } from "@openrtb-typings/iab-category";
import { Data } from "./Data";

export interface Content {
  id?: string;
  episode?: number;
  title?: string;
  series?: string;
  season?: string;
  artist?: string;
  genre?: string;
  album?: string;
  isrc?: string;
  producer?: Producer;
  url?: string;
  cat?: IABCategory[];
  prodq?: number;
  context?: number;
  contentrating?: string;
  userrating?: string;
  qagmediarating?: number;
  keywords?: string;
  livestream?: number;
  sourcerelationship?: number;
  len?: number;
  language?: string;
  embeddable?: number;
  data?: Data[];
  ext?: any;
}

export interface Producer {
  id?: string;
  name?: string;
  cat?: string[];
  domain?: string;
  ext?: any;
}
