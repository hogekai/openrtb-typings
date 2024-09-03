import { ContentCategory } from "../enum/ContentCategory";
import { Content } from "./Content";
import { Publisher } from "./Publisher";

export interface App {
  id?: string;
  name?: string;
  bundle?: string;
  domain?: string;
  storeurl?: string;
  cat?: ContentCategory[];
  sectioncat?: ContentCategory[];
  pagecat?: ContentCategory[];
  ver?: string;
  privacypolicy?: 0 | 1;
  paid?: 0 | 1;
  publisher?: Publisher;
  content?: Content;
  keywords?: string;
  ext?: Record<string, unknown>;
}