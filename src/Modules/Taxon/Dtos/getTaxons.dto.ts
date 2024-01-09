import { ApiProperty } from '@nestjs/swagger';
import { ParameterEntity } from 'src/Modules/Parameters/parameters.entity';
import { ThresholdEntity } from '../threshold.entity';
import { IsNotEmpty } from 'class-validator';

export class GetTaxonDto {
  @ApiProperty()
  @IsNotEmpty()
  _id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty()
  @IsNotEmpty()
  parameters: ParameterEntity[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty()
  @IsNotEmpty()
  thresholds: ThresholdEntity[];
}
