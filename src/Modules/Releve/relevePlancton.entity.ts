import { Column } from 'typeorm';
import { PlanctonEntity } from '../Plancton/plancton.entity';

export class RelevePlanctonEntity {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => PlanctonEntity)
  plancton: PlanctonEntity;
}
