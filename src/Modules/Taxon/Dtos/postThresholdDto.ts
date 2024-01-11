import { ApiProperty } from '@nestjs/swagger';
import { ThresholdType } from '../threshold.entity';
import { IsHexColor, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PostThresholdDto {
  @ApiProperty()
  @IsOptional()
  minimum: number |null;

  @ApiProperty()
  @IsOptional()
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
