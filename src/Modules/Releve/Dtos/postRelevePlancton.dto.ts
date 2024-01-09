import { ApiProperty } from '@nestjs/swagger';
import { PostPlanctonDto } from 'src/Modules/Plancton/Dtos/postPlancton.dto';

export class PostRelevePlanctonDto {
  @ApiProperty()
  plancton: PostPlanctonDto;
  @ApiProperty()
  quantite: number;
}
