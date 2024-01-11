import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { PostTaxonDto } from 'src/Modules/Taxon/Dtos/postTaxon.dto';

export class PostTraceTaxonDto {
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => PostTaxonDto)
  taxon: PostTaxonDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  value: number;
}
