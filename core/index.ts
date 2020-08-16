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
    record.type = item.Root.type;
    record.sourceName = item.Root.sourceName;
    record.sourceVersion = item.Root.sourceVersion;
    record.device = item.Root.device;
    record.unit = item.Root.unit;
    record.creationDate = item.Root.creationDate;
    record.startDate = item.Root.startDate;
    record.endDate = item.Root.endDate;
    await dbConnection.manager.save(record);
  }
})();
