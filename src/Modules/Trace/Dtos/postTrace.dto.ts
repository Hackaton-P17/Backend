import { ApiProperty } from '@nestjs/swagger';
import { PostTraceParameterDto } from './postTraceParameter.dto';
import { PostTraceTaxonDto } from './postTraceTaxon.dto';
import { IsDate } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';

export class PostTraceDto {
  @ApiProperty()
  @IsDate()
  date: string;
  @ApiProperty()
  station: PostStationDto;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: () => [PostTraceParameterDto] })
  parameters: PostTraceParameterDto[];
  @ApiProperty({ type: () => [PostTraceTaxonDto] })
  taxons: PostTraceTaxonDto[];
}
