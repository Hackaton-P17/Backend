import { ApiProperty } from '@nestjs/swagger';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';

export class PostReleveParameterDto {
  @ApiProperty({ type: () => String })
  valeur: number | string;

  @ApiProperty()
  parameter: PostParameterDto;
}
