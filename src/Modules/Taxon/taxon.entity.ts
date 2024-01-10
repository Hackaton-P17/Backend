import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { ParameterEntity } from '../Parameters/parameters.entity';
import { ThresholdEntity } from './threshold.entity';
import { NomenclatureEntity } from '../Nomenclature/nomenclature.entity';

@Entity('taxon')
export class TaxonEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  display: 'PRIVATE' | 'BAD' | 'GOOD';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ParameterEntity)
  parameters: ParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ThresholdEntity)
  thresholds: ThresholdEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => NomenclatureEntity)
  nomenclature: NomenclatureEntity[];
}
