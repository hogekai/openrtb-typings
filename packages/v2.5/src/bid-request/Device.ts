import { ConnectionType, DeviceType } from "../enum/Enum";
import { Geo } from "./Geo";

export interface Device {
  ua?: string;
  geo?: Geo;
  dnt?: 0 | 1;
  lmt?: 0 | 1;
  ip?: string;
  ipv6?: string;
  devicetype?: DeviceType;
  make?: string;
  model?: string;
  os?: string;
  osv?: string;
  hwv?: string;
  h?: number;
  w?: number;
  ppi?: number;
  pxratio?: number;
  js?: 0 | 1;
  geofetch?: 0 | 1;
  flashver?: string;
  language?: string;
  carrier?: string;
  mccmnc?: string;
  connectiontype?: ConnectionType;
  ifa?: string;
  didsha1?: string;
  didmd5?: string;
  dpidsha1?: string;
  dpidmd5?: string;
  macsha1?: string;
  macmd5?: string;
  ext?: Record<string, unknown>;
}

