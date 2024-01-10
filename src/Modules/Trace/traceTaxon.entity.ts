import { Column } from 'typeorm';
import { TaxonEntity } from '../Taxon/taxon.entity';

export class TraceTaxonEntity {
  @Column()
  value: number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Column((type) => TaxonEntity)
  taxon: TaxonEntity;
}
