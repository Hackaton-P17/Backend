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
        { $project: { parameters: true, _id: false } },
        {
          $project: {
            name: '$parameters.name',
            unite: '$parameters.unite',
            isPublic: '$parameters.isPublic',
            type: '$parameters.type',
          },
        },
        {
          $group: {
            _id: {
              name: '$name',
              unite: '$unite',
              isPublic: '$isPublic',
              type: '$type',
            },
          },
        },
        {
          $project: {
            name: '$_id.name',
            unite: '$_id.unite',
            isPublic: '$_id.isPublic',
            type: '$_id.type',
            _id: false,
          },
        },
      ])
      .toArray();
  }
}
