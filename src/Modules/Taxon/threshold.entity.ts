import { Column } from 'typeorm';

export type ThresholdType = 'DANGER' | 'ALERT' | 'NEUTRAL' | 'SAFE' | 'POSITIVE';

export class ThresholdEntity {
  @Column()
  minimum: number;

  @Column()
  maximum: number;

  @Column()
  color: string;

  @Column()
  type: ThresholdType;
}
