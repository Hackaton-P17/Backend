import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository} from "typeorm";
import { ObjectId } from 'mongodb';
import { PostUserDto } from "./Dtos/postUser.dto";
import { UserEntity } from "./user.entity";
import { DeleteUserDto } from "./Dtos/deleteUser.dto";
import { RoleEnum } from "./Enum/role.enum";
import { PatchUserDto } from "./Dtos/patchUser.dto";
import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: MongoRepository<UserEntity>,
      ) {}

    async create(postUserDto: PostUserDto) : Promise<boolean> {
        const user = await this.userRepository.findOneBy({ username:postUserDto.username});
        if(user === null){
            postUserDto.password = await this.hashPassword(postUserDto.password);
            await this.userRepository.insert(postUserDto);
            return true;
        }else{
            throw new Error("Ce username n'est pas disponible")
        }
    }

    async getUserById(id: string) {
        return await this.userRepository.findOneBy({ _id: new ObjectId(id) });
    }

    async getUserByUsername(username: string) {
        return await this.userRepository.findOneBy({ username: username });
    }

    async getUsers() {
        return await this.userRepository.find();
    }

    async patchUser(id: string, userDto: PatchUserDto) {
        const user =  await this.getUserById(id)
        if(userDto.password!==undefined){
            if(userDto.password!== user.password){
                userDto.password = await this.hashPassword(userDto.password)
            }
        }
        await this.userRepository.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: userDto },
        );
    }

    async deleteOneById(id: string,userDto : DeleteUserDto): Promise<boolean> {
        const user = await this.userRepository.findOneBy({ _id: new ObjectId(userDto._id) });
        const adminNb = await this.userRepository.countBy({ role: RoleEnum.ADMIN });

        if(user.role == RoleEnum.ADMIN && adminNb>1 ){
            return (await this.userRepository.delete(id)).affected > 0;
        }else if(user.role!=RoleEnum.ADMIN){
            throw Error("Vous n'avez pas les droits de suppression!")
        }
        else if(adminNb==1){
            throw Error("Impossible de supprimer le dernier compte Administrateur!")
        }
      }

    async hashPassword(_password : string){
        const salt = 10
        return await bcrypt.hash(_password, salt);
        
    }

}