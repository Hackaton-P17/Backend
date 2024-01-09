import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { ParameterEntity } from '../Parameters/parameters.entity';
import { SeuilEntity } from './seuil.entity';
import { NomenclatureEntity } from '../Nomenclature/nomenclature.entity';

@Entity('plancton')
export class PlanctonEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ParameterEntity)
  parameters: ParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => SeuilEntity)
  seuils: SeuilEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => NomenclatureEntity)
  nomenclature: NomenclatureEntity[];
}
