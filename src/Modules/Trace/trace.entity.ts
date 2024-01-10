import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { TraceParameterEntity } from './traceParameter.entity';
import { TraceTaxonEntity } from './traceTaxon.entity';
import { StationEntity } from '../Station/station.entity';

@Entity('trace')
export class TraceEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  date: string;

  @Column()
  station: StationEntity;

  @Column()
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => TraceParameterEntity)
  parametersTraces: TraceParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => TraceTaxonEntity)
  taxonsTraces: TraceTaxonEntity[];
}
