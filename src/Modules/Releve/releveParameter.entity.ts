import { Column } from 'typeorm';
import { ParameterEntity } from '../Parameters/parameters.entity';

export class ReleveParameterEntity {
  @Column()
  valeur: number | string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ParameterEntity)
  parameter: ParameterEntity;
}
