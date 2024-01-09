import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('releve')
export class Releve {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  date: string;
}
