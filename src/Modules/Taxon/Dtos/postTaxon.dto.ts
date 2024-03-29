import { ApiProperty } from '@nestjs/swagger';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';
import { PostThresholdDto } from './postThresholdDto';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TaxonDisplayType } from '../taxon.entity';

export class PostTaxonDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  display: TaxonDisplayType;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => [PostParameterDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostParameterDto)
  parameters: PostParameterDto[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => [PostThresholdDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostThresholdDto)
  thresholds: PostThresholdDto[];
}
