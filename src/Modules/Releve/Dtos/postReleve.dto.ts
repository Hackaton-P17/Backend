import { ApiProperty } from '@nestjs/swagger';
import { PostReleveParameterDto } from './postReleveParameter.dto';
import { PostRelevePlanctonDto } from './postRelevePlancton.dto';
import { IsDate } from 'class-validator';
import { PostStationDto } from 'src/Modules/Station/Dtos/postStation.dto';

export class PostReleveDto {
  @ApiProperty()
  @IsDate()
  date: string;
  @ApiProperty()
  station: PostStationDto;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: () => [PostReleveParameterDto] })
  parameters: PostReleveParameterDto[];
  @ApiProperty({ type: () => [PostRelevePlanctonDto] })
  planctons: PostRelevePlanctonDto[];
}
