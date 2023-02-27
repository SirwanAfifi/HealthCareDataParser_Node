import * as dotenv from "dotenv";
dotenv.config();
import { parser } from "./parser";
import "reflect-metadata";
import { initDatabase } from "./entities";
import { RecordEntity } from "./entities/RecordEntity";

(async () => {
  const dbConnection = await initDatabase();
  const res = await parser.parse("export.xml");
  for (let i = 0; i < res.Record.length; i++) {
    const item = res.Record[i];
    let record = new RecordEntity();
    record.type = item.Root.type || "unknown";
    record.sourceName = item.Root.sourceName || "unknown";
    record.sourceVersion = item.Root.sourceVersion || "unknown";
    record.device = item.Root.device || "unknown";
    record.unit = item.Root.unit || "unknown";
    record.value = item.Root.value || "unknown";
    record.creationDate = item.Root.creationDate || new Date();
    record.startDate = item.Root.startDate || new Date();
    record.endDate = item.Root.endDate || new Date();
    await dbConnection.manager.save(record);
  }
})();
