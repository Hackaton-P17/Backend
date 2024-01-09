import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParameterEntity } from './parameters.entity';
import { Repository } from 'typeorm';
import { PostParametersDto } from './Dtos/postParameters.dto';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(ParameterEntity)
    private readonly parametersRepository: Repository<ParameterEntity>,
  ) {}
  async getAllParameters() {
    return await this.parametersRepository.find();
  }

  async insertOne(postParametersDto: PostParametersDto) {
    return await this.parametersRepository.insert(postParametersDto);
  }
}
