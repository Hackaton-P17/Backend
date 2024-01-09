import { ApiProperty } from '@nestjs/swagger';
import { ThresholdType } from '../threshold.entity';
import { IsNotEmpty } from 'class-validator';

export class PostThresholdDto {
  @ApiProperty()
  @IsNotEmpty()
  minimum: number;

  @ApiProperty()
  @IsNotEmpty()
  maximum: number;

  @ApiProperty()
  @IsNotEmpty()
  color: string;

  @ApiProperty()
  @IsNotEmpty()
  type: ThresholdType;
}
