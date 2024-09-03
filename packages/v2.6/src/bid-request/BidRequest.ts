import { App } from "./App";
import { Device } from "./Device";
import { Imp } from "./Imp";
import { Regs } from "./Regs";
import { Site } from "./Site";
import { Source } from "./Source";
import { User } from "./User";
import { IABCategory } from "@openrtb-typings/iab-category";

export interface BidRequest {
  id: string;
  imp: Imp[];
  site?: Site;
  app?: App;
  device?: Device;
  user?: User;
  test?: number;
  at?: number;
  tmax?: number;
  wseat?: string[];
  bseat?: string[];
  allimps?: number;
  cur?: string[];
  wlang?: string[];
  bcat?: IABCategory[];
  badv?: string[];
  bapp?: string[];
  source?: Source;
  regs?: Regs;
  ext?: Record<string, unknown>;
}
