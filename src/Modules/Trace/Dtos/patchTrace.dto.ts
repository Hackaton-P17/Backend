import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';
import { PostTraceParameterDto } from './postTraceParameter.dto';
import { PostTraceTaxonDto } from './postTraceTaxon.dto';
import { Type } from 'class-transformer';

export class PatchTraceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => PostStationDto)
  station: PostStationDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: () => [PostTraceParameterDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTraceParameterDto)
  parameters: PostTraceParameterDto[];

  @ApiProperty({ type: () => [PostTraceTaxonDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTraceTaxonDto)
  taxons: PostTraceTaxonDto[];
}
