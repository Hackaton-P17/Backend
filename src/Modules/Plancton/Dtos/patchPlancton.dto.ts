import { ApiProperty } from '@nestjs/swagger';
import { ParameterEntity } from 'src/Modules/Parameters/parameters.entity';
import { SeuilEntity } from '../seuil.entity';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';
import { PostSeuilDto } from './postSeuilDto';

export class PatchPlanctonDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({type: () => [PostParameterDto]})
  parameters: PostParameterDto[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({type: () => [PostSeuilDto]})
  seuils: PostSeuilDto[];
}
