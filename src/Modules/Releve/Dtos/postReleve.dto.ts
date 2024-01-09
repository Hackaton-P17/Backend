import { ApiProperty } from '@nestjs/swagger';

export class PostReleveDto {
  @ApiProperty()
  date: string;
}
