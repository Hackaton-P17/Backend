import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanctonEntity } from './plancton.entity';
import { PostPlanctonDto } from './Dtos/postPlancton.dto';
import { PatchPlanctonDto } from './Dtos/patchPlancton.dto';
import { MongoRepository } from 'typeorm';

@Injectable()
export class PlanctonService {
  constructor(
    @InjectRepository(PlanctonEntity)
    private readonly planctonRepository: MongoRepository<PlanctonEntity>,
  ) {}
  async getAllPlancton() : Promise<PlanctonEntity[]>{
    return await this.planctonRepository.find();
  }

  async getPlanctonById(id : string) : Promise<PlanctonEntity>{
    return await this.planctonRepository.findOneBy(id);
  }

  async insertOne(planctonDto: PostPlanctonDto) {
    await this.planctonRepository.insert(planctonDto);
  }

  async patchOne(id:string,planctonDto: PatchPlanctonDto) {
    await this.planctonRepository.updateOne({'_id':id},planctonDto);
  }

  async deleteOneById(id: string): Promise<boolean> {
    
    return (await this.planctonRepository.delete(id)).affected > 0;
  }

}
