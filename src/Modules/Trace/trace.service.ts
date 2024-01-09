import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TraceEntity } from './trace.entity';
import { Repository } from 'typeorm';
import { PostTraceDto } from './Dtos/postTrace.dto';

@Injectable()
export class TraceService {
  constructor(
    @InjectRepository(TraceEntity)
    private readonly traceRepository: Repository<TraceEntity>,
  ) {}
  async getAllTraces() {
    return await this.traceRepository.find();
  }

  async insertOne(postTraceDto: PostTraceDto) {
    return await this.traceRepository.insert(postTraceDto);
  }
}
