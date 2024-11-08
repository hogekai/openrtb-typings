import { IABCategory } from "@openrtb-typings/iab-category";

export interface Publisher {
    id?: string;
    name?: string;
    cat?: IABCategory[];
    domain?: string;
    ext?: Record<string, unknown>;
  }
  