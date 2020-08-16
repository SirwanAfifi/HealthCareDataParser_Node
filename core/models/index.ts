import { Me } from "./Me";
import { ExportDate } from "./ExportDate";
import { RecordRoot } from "./Record";

export interface HealthData {
  Root: { locale: string };
  ExportDate: Array<ExportDate>;
  Me: Array<Me>;
  Record: Array<RecordRoot>;
}

export * from "./ExportDate";
export * from "./Me";
export * from "./Record";
