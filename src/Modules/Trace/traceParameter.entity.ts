import { Column } from 'typeorm';
import { ParameterEntity } from '../Parameters/parameters.entity';

export class TraceParameterEntity {
  @Column()
  value: number | string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ParameterEntity)
  parameter: ParameterEntity;
}
