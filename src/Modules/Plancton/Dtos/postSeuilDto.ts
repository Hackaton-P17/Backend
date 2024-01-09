import { ApiProperty } from '@nestjs/swagger';
import { SeuilType } from '../seuil.entity';

export class PostSeuilDto {
  @ApiProperty()
  minimum: number;

  @ApiProperty()
  maximum: number;

  @ApiProperty()
  color: string;

  @ApiProperty()
  type: SeuilType;
}
