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
  eids: EID[];
  data?: Data[];
  ext?: Record<string, unknown>;
}

export interface EID {
  source: string;
  uids: UID[];
}

export interface UID {
  id: string;
  atype?: number;
}