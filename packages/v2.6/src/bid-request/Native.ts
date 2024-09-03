import { APIFramework, CreativeAttribute } from "../enum/Enum";

export interface Native {
  request: string;
  ver?: string;
  api?: APIFramework[];
  battr?: CreativeAttribute[];
  ext?: Record<string, unknown>;
}
