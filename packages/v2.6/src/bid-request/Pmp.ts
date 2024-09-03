export interface Pmp {
  private_auction?: number;
  deals?: Deal[];
  ext?: Record<string, unknown>;
}

export interface Deal {
  id: string;
  bidfloor?: number;
  bidfloorcur?: string;
  at?: number;
  wseat?: string[];
  wadomain?: string[];
  ext?: Record<string, unknown>;
}
