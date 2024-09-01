import { Bid } from "./Bid";

export interface SeatBid {
  bid: Bid[];
  seat?: string;
  group?: 0 | 1;
  ext?: Record<string, unknown>;
}
