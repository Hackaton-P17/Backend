import { ApiProperty } from '@nestjs/swagger';
import { PostTraceParameterDto } from './postTraceParameter.dto';
import { PostTraceTaxonDto } from './postTraceTaxon.dto';
import { IsDate, IsNotEmpty } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';

export class PostTraceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: string;
  @ApiProperty()
  @IsNotEmpty()
  station: PostStationDto;
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty({ type: () => [PostTraceParameterDto] })
  @IsNotEmpty()
  parameters: PostTraceParameterDto[];
  @ApiProperty({ type: () => [PostTraceTaxonDto] })
  @IsNotEmpty()
  taxons: PostTraceTaxonDto[];
}
