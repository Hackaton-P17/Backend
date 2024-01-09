import { ApiProperty } from '@nestjs/swagger';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';
import { PostSeuilDto } from './postSeuilDto';
import { IsOptional } from 'class-validator';

export class PostPlanctonDto {
  @ApiProperty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => PostParameterDto })
  @IsOptional()
  parameters: PostParameterDto[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => PostSeuilDto })
  @IsOptional()
  seuils: PostSeuilDto[];
}
