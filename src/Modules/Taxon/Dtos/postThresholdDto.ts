import { ApiProperty } from '@nestjs/swagger';
import { ThresholdType } from '../threshold.entity';

export class PostThresholdDto {
  @ApiProperty()
  minimum: number;

  @ApiProperty()
  maximum: number;

  @ApiProperty()
  color: string;

  @ApiProperty()
  type: ThresholdType;
}
