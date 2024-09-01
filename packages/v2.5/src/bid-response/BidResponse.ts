import { NoBidReasonCode } from "../enum/Enum";
import { SeatBid } from "./SeatBid";

export interface BidResponse {
  id: string;
  seatbid?: SeatBid[];
  bidid?: string;
  cur?: string;
  customdata?: string;
  nbr?: NoBidReasonCode;
  ext?: Record<string, unknown>;
}
