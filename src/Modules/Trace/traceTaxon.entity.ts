import { Column } from 'typeorm';
import { TaxonEntity } from '../Taxon/taxon.entity';

export class TraceTaxonEntity {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => TaxonEntity)
  taxon: TaxonEntity;
}
