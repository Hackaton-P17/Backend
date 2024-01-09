import { ApiProperty } from '@nestjs/swagger';

export class PostParametersDto {
  @ApiProperty()
  nom: string;
  type:string;
  unite:string;
  isPublic :boolean;
}
