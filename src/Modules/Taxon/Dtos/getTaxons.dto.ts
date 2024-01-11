import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { TaxonDisplayType } from '../taxon.entity';
import { Type } from 'class-transformer';

export class GetTaxonDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  display: TaxonDisplayType;
}
