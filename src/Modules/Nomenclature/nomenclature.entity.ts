import { Column } from 'typeorm';

export class NomenclatureEntity {
  @Column()
  name: string;

  @Column()
  value: string;
}
