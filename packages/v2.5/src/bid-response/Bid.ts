import { ContentCategory } from "../enum/ContentCategory";
import { APIFramework, CreativeAttribute, IQGMediaRating, Protocol } from "../enum/Enum";

export interface Bid {
  id: string;
  impid: string;
  price: number;
  nurl?: string;
  burl?: string;
  lurl?: string;
  adm?: string;
  adid?: string;
  adomain?: string[];
  bundle?: string;
  iurl?: string;
  cid?: string;
  crid?: string;
  tactic?: string;
  cat?: ContentCategory[];
  attr?: CreativeAttribute[];
  api?: APIFramework;
  protocol?: Protocol;
  qagmediarating?: IQGMediaRating;
  language?: string;
  dealid?: string;
  w?: number;
  h?: number;
  wratio?: number;
  hratio?: number;
  exp?: number;
  ext?: Record<string, unknown>;
}
