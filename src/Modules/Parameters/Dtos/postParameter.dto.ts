import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { PostThresholdDto } from 'src/Modules/Taxon/Dtos/postThresholdDto';

export class PostParameterDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  unite: string;

  @ApiProperty({ default: false })
  @IsNotEmpty()
  isPublic: boolean;

  @ApiProperty({ default: 'number' })
  @IsNotEmpty()
  type: string;

  @ApiProperty({ type: () => [PostThresholdDto] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostThresholdDto)
  thresholds: PostThresholdDto[];
}
