import { ApiProperty } from '@nestjs/swagger';

export class PostStationDto {
  @ApiProperty()
  name: string;
}
