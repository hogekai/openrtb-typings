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
  keywords?: string[] | string;
  livestream?: number;
  sourcerelationship?: number;
  len?: number;
  language?: string;
  embeddable?: number;
  data?: Data[];
  ext?: Record<string, unknown>;
  network?: Network;
  channel?: Channel;
}

export interface Producer {
  id?: string;
  name?: string;
  cat?: string[];
  domain?: string;
  ext?: Record<string, unknown>;
}

export interface Network {
  id: string;
  name: string;
  domain: string;
}

export interface Channel {
  id: string;
  name: string;
  domain: string;
}