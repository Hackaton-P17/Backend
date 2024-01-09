import { Column } from 'typeorm';
import { SeuilEntity } from '../Plancton/seuil.entity';

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
  @Column((type) => SeuilEntity)
  seuils: SeuilEntity[];
}
