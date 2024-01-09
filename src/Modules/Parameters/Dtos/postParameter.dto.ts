import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { PostThresholdDto } from 'src/Modules/Taxon/Dtos/postThresholdDto';

export class PostParameterDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  unite: string;

  @ApiProperty({ default: false })
  @IsOptional()
  isPublic: boolean;

  @ApiProperty({ default: 'number' })
  @IsOptional()
  type: string;

  @ApiProperty({ default: [], type: () => PostThresholdDto })
  @IsOptional()
  thresholds: PostThresholdDto[];
}
