import { ApiProperty } from '@nestjs/swagger';
import { PostTaxonDto } from 'src/Modules/Taxon/Dtos/postTaxon.dto';

export class PostTraceTaxonDto {
  @ApiProperty()
  taxon: PostTaxonDto;
  @ApiProperty()
  quantite: number;
}
