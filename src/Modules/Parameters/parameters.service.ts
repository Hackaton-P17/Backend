import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { TaxonEntity } from '../Taxon/taxon.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(TaxonEntity)
    private readonly taxonRepository: MongoRepository<TaxonEntity>,
  ) {}
  async getAllParameters(): Promise<TaxonEntity[]> {
    return await this.taxonRepository
      .aggregate([
        { $unwind: '$parameters' },
        {
          $group: {
            _id: {
              name: '$parameters.name',
              unite: '$parameters.unite',
              isPublic: '$parameters.isPublic',
              type: '$parameters.type',
            },
          },
        },
        {
          $replaceRoot: {
            newRoot: '$_id',
          },
        },
      ])
      .sort({ name: 1 })
      .toArray();
  }
}
