import { Data } from "./Data";
import { Geo } from "./Geo";

export interface User {
  id?: string;
  buyeruid?: string;
  yob?: number;
  gender?: 'M' | 'F' | 'O';
  keywords?: string;
  customdata?: string;
  geo?: Geo;
  data?: Data[];
  ext?: Record<string, unknown>;
}
