export interface Source {
  fd?: 0 | 1;
  tid?: string;
  pchain?: string;
  ext?: Record<string, unknown>;
}
