export interface Data {
  id: string;
  name?: string;
  segment?: Segment[];
  ext?: Record<string, unknown>;
}

export interface Segment {
  id: string;
  name?: string;
  value?: string;
  ext?: Record<string, unknown>;
}
