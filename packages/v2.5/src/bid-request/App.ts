
import { IABCategory } from "@openrtb-typings/iab-category";
import { Content } from "./Content";
import { Publisher } from "./Publisher";

export interface App {
  id?: string;
  name?: string;
  bundle?: string;
  domain?: string;
  storeurl?: string;
  cat?: IABCategory[];
  sectioncat?: IABCategory[];
  pagecat?: IABCategory[];
  ver?: string;
  privacypolicy?: 0 | 1;
  paid?: 0 | 1;
  publisher?: Publisher;
  content?: Content;
  keywords?: string;
  ext?: Record<string, unknown>;
}