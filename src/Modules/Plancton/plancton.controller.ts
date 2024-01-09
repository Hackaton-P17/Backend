import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PlanctonEntity } from "./plancton.entity";
import { PlanctonService } from "./plancton.service";
import { PostPlanctonDto } from './Dtos/postPlancton.dto';
import { PatchPlanctonDto } from "./Dtos/patchPlancton.dto";


@Controller('plancton')
export class PlanctonController {
  constructor(
    private readonly planctonService: PlanctonService) {}

  @Post()
  async create(@Body() planctonDto : PostPlanctonDto) {
    await this.planctonService.insertOne(planctonDto);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<PlanctonEntity> {
    return await this.planctonService.getPlanctonById(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string,@Body() planctonDto: PatchPlanctonDto) {
    await this.planctonService.patchOne(id, planctonDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.planctonService.deleteOneById(id);
  }

  @Get()
  async findAll(): Promise<PlanctonEntity[]> {
    return await this.planctonService.getAllPlancton();
  }
}


