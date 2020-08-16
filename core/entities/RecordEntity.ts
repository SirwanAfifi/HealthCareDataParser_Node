import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "Records",
})
export class RecordEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  sourceName: string;
  @Column()
  sourceVersion: string;
  @Column()
  device: string;
  @Column()
  unit: string;
  @Column()
  creationDate: Date;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
}
