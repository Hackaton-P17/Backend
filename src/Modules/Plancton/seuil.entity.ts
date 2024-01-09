import { Column } from 'typeorm';

export type SeuilType = 'DANGER' | 'ALERT' | 'NEUTRAL' | 'SAFE' | 'POSITIVE';

export class SeuilEntity {
  @Column()
  minimum: number;

  @Column()
  maximum: number;

  @Column()
  color: string;

  @Column()
  type: SeuilType;
}
