import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';
import { PostTraceParameterDto } from './postTraceParameter.dto';
import { PostTraceTaxonDto } from './postTraceTaxon.dto';
import { Type } from 'class-transformer';

export class PatchTraceDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  date: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => PostStationDto)
  station: PostStationDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ type: () => [PostTraceParameterDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTraceParameterDto)
  parametersTraces: PostTraceParameterDto[];

  @ApiProperty({ type: () => [PostTraceTaxonDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTraceTaxonDto)
  taxonsTraces: PostTraceTaxonDto[];
}
