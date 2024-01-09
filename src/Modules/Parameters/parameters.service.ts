import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { PlanctonEntity } from '../Plancton/plancton.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(PlanctonEntity)
    private readonly planctonRepository: MongoRepository<PlanctonEntity>,
  ) {}
  async getAllParameters(): Promise<PlanctonEntity[]> {
    return await this.planctonRepository
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
