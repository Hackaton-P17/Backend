import { ApiProperty } from '@nestjs/swagger';
import { ThresholdType } from '../threshold.entity';
import { IsHexColor, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostThresholdDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  minimum: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  maximum: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: ThresholdType;
}
