import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetTracesDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  date: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @Transform((params) => {
    return Array.isArray(params.value) ? params.value : [params.value];
  })
  stations: string[];
  
  @ApiPropertyOptional()
  @IsNotEmpty()
  @Transform((params) => {
    return Array.isArray(params.value) ? params.value : [params.value];
  })
  taxons: string[];
}
