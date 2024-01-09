import { Column } from 'typeorm';

export class SeuilEntity {
  @Column()
  minimum: number;

  @Column()
  maximum: number;

  @Column()
  color: string;

  @Column()
  type: 'DANGER' | 'ALERT' | 'NEUTRAL' | 'SAFE' | 'POSITIVE';
}
