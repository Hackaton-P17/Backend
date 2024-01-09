import { ApiProperty } from '@nestjs/swagger';
import { ParameterEntity } from 'src/Modules/Parameters/parameters.entity';
import { SeuilEntity } from '../seuil.entity';
import { ObjectId } from 'typeorm';

export class GetPlanctonDto {

  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty()
  parameters: ParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty()
  seuils: SeuilEntity[];

}