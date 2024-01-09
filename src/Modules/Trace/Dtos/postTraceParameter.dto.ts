import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';

export class PostTraceParameterDto {
  @ApiProperty({ type: () => String })
  @IsNotEmpty()
  valeur: number | string;

  @ApiProperty()
  @IsNotEmpty()
  parameter: PostParameterDto;
}
