import * as xml2js from "xml2js";
import * as fs from "fs";
import { HealthData } from "./models";

class HealthCareDataParser {
  async parse(fileName: string) {
    const parser = new xml2js.Parser({ attrkey: "Root" });
    let xml = fs.readFileSync(fileName, "utf8");
    const result = await parser.parseStringPromise(xml);
    return result.HealthData as HealthData;
  }
}

export const parser = new HealthCareDataParser();
