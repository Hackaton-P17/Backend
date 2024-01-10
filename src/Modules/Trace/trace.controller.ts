import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TraceService } from './trace.service';
import { PostTraceDto } from './Dtos/postTrace.dto';
import { ApiTags } from '@nestjs/swagger';
import { PatchTraceDto } from './Dtos/patchTrace.dto';
import { GetTracesDto } from './Dtos/getTraces.dto';

@Controller('trace')
@ApiTags('trace')
export class TraceController {
  constructor(private readonly traceService: TraceService) {}

  @Get()
  async getAllTraces() {
    return await this.traceService.getAll();
  }

  @Get('unwinded')
  async getAllTracesUnwinded(@Query() getTracesDto: GetTracesDto) {
    return await this.traceService.getAllUnwined(getTracesDto);
  }

  @Get('taxons/list')
  async getTaxonsReportedList() {
    return await this.traceService.getTaxonsList();
  }

  @Get('stations/list')
  async getStationsReportedList() {
    return await this.traceService.getStationsList();
  }

  @Get(':id')
  async getTrace(@Param('id') id: string) {
    return await this.traceService.getOne(id);
  }

  @Post()
  async insertTrace(@Body() postTraceDto: PostTraceDto) {
    return await this.traceService.insertOne(postTraceDto);
  }

  @Patch(':id')
  async updateTrace(
    @Param('id') id: string,
    @Body() patchTraceDto: PatchTraceDto,
  ) {
    return await this.traceService.updateOne(id, patchTraceDto);
  }

  @Delete(':id')
  async removeTrace(@Param('id') id: string) {
    return await this.traceService.deleteOne(id);
  }
}
