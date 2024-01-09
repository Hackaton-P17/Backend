import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parameters } from './parameters.entity';
import { Repository } from 'typeorm';
import { PostReleveDto } from './Dtos/postReleve.dto';

@Injectable()
export class ParametersService {
    constructor(
        @InjectRepository(Parameters)
        private readonly parametersRepository: Repository<Parameters>,
    ) {}
    async getAllParameters() {
        return await this.parametersRepository.find();
    }

    async insertOne(postParametersDto: PostParametersDto) {
        return await this.parametersRepository.insert(postParametersDto);
    }
}
