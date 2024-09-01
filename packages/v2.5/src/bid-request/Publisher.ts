import { ContentCategory } from "../enum/ContentCategory";

export interface Publisher {
    id?: string;
    name?: string;
    cat?: ContentCategory[];
    domain?: string;
    ext?: Record<string, unknown>;
  }
  