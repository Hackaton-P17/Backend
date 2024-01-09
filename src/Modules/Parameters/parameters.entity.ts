import { Column } from 'typeorm';
import { ThresholdEntity } from '../Taxon/threshold.entity';

export class ParameterEntity {
  @Column()
  name: string;

  @Column()
  unite: string;

  @Column()
  isPublic: boolean;

  @Column()
  type: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => ThresholdEntity)
  thresholds: ThresholdEntity[];
}
