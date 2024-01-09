import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { PostTaxonDto } from 'src/Modules/Taxon/Dtos/postTaxon.dto';

export class PostTraceTaxonDto {
  @ApiProperty()
  @IsNotEmpty()
  taxon: PostTaxonDto;
  @ApiProperty()
  @IsNotEmpty()
  quantite: number;
}
