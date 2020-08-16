export interface RecordItem {
  type: string;
  sourceName: string;
  sourceVersion: string;
  device: string;
  unit: string;
  creationDate: Date;
  startDate: Date;
  endDate: Date;
}

export interface RecordRoot {
  Root: RecordItem;
}
