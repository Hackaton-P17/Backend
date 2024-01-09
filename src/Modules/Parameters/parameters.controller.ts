import { Controller, Get } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('parameters')
@ApiTags('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Get()
  async getAllParameters() {
    return await this.parametersService.getAllParameters();
  }
}
