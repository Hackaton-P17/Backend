import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';
import { PostThresholdDto } from './postThresholdDto';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TaxonDisplayType } from '../taxon.entity';

export class PatchTaxonDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  display: TaxonDisplayType;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => [PostParameterDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostParameterDto)
  parameters: PostParameterDto[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => [PostThresholdDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostThresholdDto)
  thresholds: PostThresholdDto[];
}
