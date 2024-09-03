import { AdPosition, APIFramework, BannerAdType, CreativeAttribute, ExpandableDirection } from "../enum/Enum";

export interface Banner {
  format?: Format[];
  w?: number;
  h?: number;
  btype?: BannerAdType[];
  battr?: CreativeAttribute[];
  pos?: AdPosition;
  mimes?: string[];
  topframe?: 0 | 1;
  expdir?: ExpandableDirection[];
  api?: APIFramework[];
  id?: string;
  vcm?: 0 | 1;
  ext?: Record<string, unknown>;
}

export interface Format {
  w: number;
  h: number;
  wratio?: number;
  hratio?: number;
  wmin?: number;
  ext?: any;
}
