import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { PostParametersDto } from './Dtos/postParameters.dto';

@Controller('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Get()
  async getAllParameters() {
    return await this.parametersService.getAllParameters();
  }

  @Post()
  async insertReleve(@Body() postParametersDto: PostParametersDto) {
    return await this.parametersService.insertOne(postParametersDto);
  }
}
