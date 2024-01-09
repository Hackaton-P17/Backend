import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostStationDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
