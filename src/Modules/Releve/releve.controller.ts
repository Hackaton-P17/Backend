import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReleveService } from './releve.service';
import { PostReleveDto } from './Dtos/postReleve.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('releve')
@ApiTags('releve')
export class ReleveController {
  constructor(private readonly releveService: ReleveService) {}

  @Get()
  async getAllReleves() {
    return await this.releveService.getAllReleves();
  }

  @Post()
  async insertReleve(@Body() postReleveDto: PostReleveDto) {
    return await this.releveService.insertOne(postReleveDto);
  }
}
