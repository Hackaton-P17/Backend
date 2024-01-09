import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { PlanctonEntity } from '../Plancton/plancton.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(PlanctonEntity)
    private readonly planctonRepository: MongoRepository<PlanctonEntity>,
  ) {}
  async getAllParameters() {
    return await this.planctonRepository.distinct('parameters', {});
  }
}
