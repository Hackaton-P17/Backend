import { Body, Controller, Get, Post } from '@nestjs/common';
import { TraceService } from './trace.service';
import { PostTraceDto } from './Dtos/postTrace.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('trace')
@ApiTags('trace')
export class TraceController {
  constructor(private readonly traceService: TraceService) {}

  @Get()
  async getAllTraces() {
    return await this.traceService.getAllTraces();
  }

  @Post()
  async insertTrace(@Body() postTraceDto: PostTraceDto) {
    return await this.traceService.insertOne(postTraceDto);
  }
}
