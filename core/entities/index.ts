import { createConnection } from "typeorm";
import { RecordEntity } from "./RecordEntity";

export const initDatabase = async () => {
  return createConnection({
    type: "mysql",
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "3306"),
    username: process.env.DATABASE_USERNAME || "",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_NAME || "",
    entities: [RecordEntity],
    synchronize: true,
    logging: false,
  });
};
