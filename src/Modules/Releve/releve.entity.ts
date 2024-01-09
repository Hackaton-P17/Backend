import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('releve')
export class ReleveEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  date: string;
}
