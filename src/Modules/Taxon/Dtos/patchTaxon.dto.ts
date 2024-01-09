import { ApiProperty } from '@nestjs/swagger';
import { ParameterEntity } from 'src/Modules/Parameters/parameters.entity';
import { ThresholdEntity } from '../threshold.entity';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';
import { PostThresholdDto } from './postThresholdDto';

export class PatchTaxonDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({type: () => [PostParameterDto]})
  parameters: PostParameterDto[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({type: () => [PostThresholdDto]})
  thresholds: PostThresholdDto[];
}
