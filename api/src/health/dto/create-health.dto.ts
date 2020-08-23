import { IsString } from 'class-validator';

export class CreateHealthDto {
  readonly id: number;

  @IsString()
  readonly name: string;
}
