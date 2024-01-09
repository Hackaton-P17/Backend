import { ApiProperty } from '@nestjs/swagger';
import { ParameterEntity } from 'src/Modules/Parameters/parameters.entity';
import { ThresholdEntity } from '../threshold.entity';
import { ObjectId } from 'typeorm';

export class GetTaxonDto {

  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty()
  parameters: ParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty()
  thresholds: ThresholdEntity[];

}