import { ApiProperty } from '@nestjs/swagger';
import { PostParameterDto } from 'src/Modules/Parameters/Dtos/postParameter.dto';
import { PostThresholdDto } from './postThresholdDto';
import { IsOptional } from 'class-validator';

export class PostTaxonDto {
  @ApiProperty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => [PostParameterDto] })
  @IsOptional()
  parameters: PostParameterDto[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ApiProperty({ type: () => [PostThresholdDto] })
  @IsOptional()
  thresholds: PostThresholdDto[];
}