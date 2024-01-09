import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Releve } from './releve.entity';
import { Repository } from 'typeorm';
import { PostReleveDto } from './Dtos/postReleve.dto';

@Injectable()
export class ReleveService {
  constructor(
    @InjectRepository(Releve)
    private readonly releveRepository: Repository<Releve>,
  ) {}
  async getAllReleves() {
    return await this.releveRepository.find();
  }

  async insertOne(postReleveDto: PostReleveDto) {
    return await this.releveRepository.insert(postReleveDto);
  }
}
