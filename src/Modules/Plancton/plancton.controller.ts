import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PlanctonEntity } from "./plancton.entity";
import { PlanctonService } from "./plancton.service";
import { PlanctonsController } from "./planctons.controller";
import { PlanctonDto } from './Dtos/postPlancton.dto';


@Controller('plancton')
export class PlanctonController {
  constructor(
    private readonly planctonService: PlanctonService,
    private readonly planctonsController: PlanctonsController) {}

  @Post()
  async create(@Body() planctonDto : PlanctonDto) {
    await this.planctonService.insertOne(planctonDto);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<PlanctonEntity> {
    return this.planctonService.getPlanctonById(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string,@Body() planctonDto: PlanctonDto) {
    await this.planctonService.insertOne(id, planctonDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.planctonService.deleteOneById(id);
  }

  @Get()
  findAll(): string {
    return 'jolies planctons';

  }
}


