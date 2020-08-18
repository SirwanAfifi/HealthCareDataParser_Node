import { Injectable } from '@nestjs/common';
import { RecordItem } from './entities/health.entity';

@Injectable()
export class HealthService {
  private records: RecordItem[] = [
    {
      id: 1,
      type: 'HKQuantityTypeIdentifierStepCount',
      unit: 'Count',
      value: '12',
      sourceName: 'Sirwan Afifi’s iPhone',
      sourceVersion: '10.3.3',
      device: 'iPhone',
      creationDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  findAll() {
    return this.records;
  }

  findOne(id: number) {
    return this.records.find(item => item.id === id);
  }

  create(createRecordDto: any) {
    this.records.push(createRecordDto);
  }

  update(id: number, updateRecordDto: any) {
    const existingRecord = this.findOne(id);
    if (existingRecord) {
    }
  }

  remove(id: number) {
    const recordIndex = this.records.findIndex(item => item.id === id);
    if (recordIndex >= 0) {
      this.records.splice(recordIndex, 1);
    }
  }
}
