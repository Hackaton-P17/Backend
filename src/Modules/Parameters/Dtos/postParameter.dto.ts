import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PostSeuilDto } from 'src/Modules/Plancton/Dtos/postSeuilDto';

export class PostParameterDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  unite: string;

  @ApiProperty({ default: false })
  @IsOptional()
  isPublic: boolean;

  @ApiProperty({ default: 'number' })
  @IsOptional()
  type: string;

  @ApiProperty({ default: [], type: () => PostSeuilDto })
  @IsOptional()
  seuils: PostSeuilDto[];
}
