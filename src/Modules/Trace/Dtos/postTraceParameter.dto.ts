import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';

export class PostTraceParameterDto {
  @ApiProperty({ type: () => String })
  @IsNotEmpty()
  value: number | string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => PostParameterDto)
  parameter: PostParameterDto;
}
