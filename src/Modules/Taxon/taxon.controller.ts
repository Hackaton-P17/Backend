import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TaxonEntity } from "./taxon.entity";
import { TaxonService } from "./taxon.service";
import { PostTaxonDto } from './Dtos/postTaxon.dto';
import { PatchTaxonDto } from "./Dtos/patchTaxon.dto";
import { ApiTags } from "@nestjs/swagger";


@Controller('taxons')
@ApiTags('taxons')
export class TaxonController {
  constructor(
    private readonly taxonService: TaxonService) {}

  @Post()
  async create(@Body() taxonDto : PostTaxonDto) {
    await this.taxonService.insertOne(taxonDto);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<TaxonEntity> {
    return await this.taxonService.getTaxonById(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string,@Body() taxonDto: PatchTaxonDto) {
    await this.taxonService.patchOne(id, taxonDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.taxonService.deleteOneById(id);
  }

  @Get()
  async findAll(): Promise<TaxonEntity[]> {
    return await this.taxonService.getAllTaxon();
  }
}


