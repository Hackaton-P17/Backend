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

  @Column()
  parameters: ParameterEntity[];

  @Column()
  seuils: SeuilEntity[];

  @Column()
  nomenclature: NomenclatureEntity[];
}
