import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GetTracesDto {
  @ApiPropertyOptional()
  @IsOptional()
  date: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform((params) => {
    return Array.isArray(params.value) ? params.value : [params.value];
  })
  stations: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @Transform((params) => {
    return Array.isArray(params.value) ? params.value : [params.value];
  })
  taxons: string[];
}
