import { ApiProperty } from '@nestjs/swagger';
import { PostTraceParameterDto } from './postTraceParameter.dto';
import { PostTraceTaxonDto } from './postTraceTaxon.dto';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';
import { Type } from 'class-transformer';

export class PostTraceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => PostStationDto)
  station: PostStationDto;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ type: () => [PostTraceParameterDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTraceParameterDto)
  parametersTraces: PostTraceParameterDto[];

  @ApiProperty({ type: () => [PostTraceTaxonDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTraceTaxonDto)
  taxonsTraces: PostTraceTaxonDto[];
}
