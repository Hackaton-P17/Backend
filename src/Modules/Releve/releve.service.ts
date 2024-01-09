import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReleveEntity } from './releve.entity';
import { Repository } from 'typeorm';
import { PostReleveDto } from './Dtos/postReleve.dto';

@Injectable()
export class ReleveService {
  constructor(
    @InjectRepository(ReleveEntity)
    private readonly releveRepository: Repository<ReleveEntity>,
  ) {}
  async getAllReleves() {
    return await this.releveRepository.find();
  }

  async insertOne(postReleveDto: PostReleveDto) {
    return await this.releveRepository.insert(postReleveDto);
  }
}
