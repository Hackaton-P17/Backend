import { Column } from 'typeorm';

export class StationEntity {
  @Column()
  name: string;
}
