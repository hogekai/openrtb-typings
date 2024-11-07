import { Audio } from "./Audio";
import { Banner } from "./Banner";
import { Metric } from "./Metric";
import { Native } from "./Native";
import { Pmp } from "./Pmp";
import { Video } from "./Video";

export interface Imp {
  id: string;
  metric?: Metric[];
  banner?: Banner;
  video?: Video;
  audio?: Audio;
  native?: Native;
  pmp?: Pmp;
  displaymanager?: string;
  displaymanagerver?: string;
  instl?: 0 | 1;
  tagid?: string;
  bidfloor?: number;
  bidfloorcur?: string;
  clickbrowser?: 0 | 1;
  secure?: 0 | 1;
  iframebuster?: string[];
  exp?: number;
  ext?: Record<string, unknown>;
}
