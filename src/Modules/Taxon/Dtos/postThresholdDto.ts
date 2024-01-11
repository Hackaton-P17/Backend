import { ApiProperty } from '@nestjs/swagger';
import { ThresholdType } from '../threshold.entity';
import { IsHexColor, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostThresholdDto {
  @ApiProperty()
  minimum: number |null;

  @ApiProperty()
  maximum: number|null;

  @ApiProperty()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: ThresholdType;
}
