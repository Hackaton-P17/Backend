import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';
import { PostTraceParameterDto } from './postTraceParameter.dto';
import { PostTraceTaxonDto } from './postTraceTaxon.dto';

export class PatchTraceDto {
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
