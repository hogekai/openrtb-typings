export interface Source {
  fd?: 0 | 1;
  tid?: string;
  pchain?: string;
  schain?: SupplyChain;
  ext?: Record<string, unknown>;
}

export interface SupplyChain {
  complete: number;
  nodes: SupplyChainNode[];
  ver: string;
}

export interface SupplyChainNode {
  asi: string;
  sid: string;
  rid?: string;
  name?: string;
  domain?: string;
  hp?: number;
}