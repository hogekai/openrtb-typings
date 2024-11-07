export interface Metric {
  type: string;
  value: number;
  vendor?: string;
  ext?: Record<string, unknown>;
}
