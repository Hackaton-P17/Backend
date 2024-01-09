import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { ReleveParameterEntity } from './releveParameter.entity';
import { RelevePlanctonEntity } from './relevePlancton.entity';
import { StationEntity } from '../Station/station.entity';

@Entity('releve')
export class ReleveEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  date: string;

  @Column()
  station: StationEntity;

  @Column()
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ReleveParameterEntity)
  parameters: ReleveParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => RelevePlanctonEntity)
  planctons: RelevePlanctonEntity[];
}
