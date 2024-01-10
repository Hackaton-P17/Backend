import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('user')
export class UserEntity{

    @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role:number;

}