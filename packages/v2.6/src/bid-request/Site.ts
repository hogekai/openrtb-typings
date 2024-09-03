import { Content } from "./Content";
import { Publisher } from "./Publisher";

export interface Site {
  id?: string;
  name?: string;
  domain?: string;
  cat?: string[];
  sectioncat?: string[];
  pagecat?: string[];
  page?: string;
  ref?: string;
  search?: string;
  mobile?: number;
  privacypolicy?: number;
  publisher?: Publisher;
  content?: Content;
  keywords?: string;
  ext?: Record<string, unknown>;
}