import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TraceEntity } from './trace.entity';
import { MongoRepository } from 'typeorm';
import { PostTraceDto } from './Dtos/postTrace.dto';
import { ObjectId } from 'mongodb';
import { GetTracesDto } from './Dtos/getTraces.dto';
import { PatchTraceDto } from './Dtos/patchTrace.dto';

@Injectable()
export class TraceService {
  constructor(
    @InjectRepository(TraceEntity)
    private readonly traceRepository: MongoRepository<TraceEntity>,
  ) {}
  async getAll() {
    return await this.traceRepository.find();
  }

  async getAllUnwined(getTracesDto: GetTracesDto) {
    const match = {};
    if (getTracesDto.date) match['date'] = getTracesDto.date;
    if (getTracesDto.taxons && getTracesDto.taxons.length > 0)
      match['taxonTrace.taxon'] = { $in: getTracesDto.taxons };
    if (getTracesDto.stations && getTracesDto.stations.length > 0)
      match['station'] = { $in: getTracesDto.stations };
    return {
      headers: {
        parameters: await this.getAllUnwinedParameters(match),
      },
      reports: await this.traceRepository
        .aggregate([
          { $unwind: '$taxonsTraces' },
          {
            $project: {
              date: true,
              station: '$station.name',
              description: true,
              taxonTrace: {
                taxon: '$taxonsTraces.taxon.name',
                value: '$taxonsTraces.value',
              },
              parametersTraces: true,
            },
          },
          {
            $match: match,
          },
        ])
        .toArray(),
    };
  }

  private async getAllUnwinedParameters(match: any) {
    return await this.traceRepository
      .aggregate([
        { $unwind: '$taxonsTraces' },
        {
          $project: {
            date: true,
            station: '$station.name',
            description: true,
            taxonTrace: {
              taxon: '$taxonsTraces.taxon.name',
              value: '$taxonsTraces.value',
            },
            parametersTraces: true,
          },
        },
        {
          $match: match,
        },
        { $unwind: '$parametersTraces' },
        {
          $group: {
            _id: {
              name: '$parametersTraces.parameter.name',
              unite: '$parametersTraces.parameter.unite',
              isPublic: '$parametersTraces.parameter.isPublic',
              type: '$parametersTraces.parameter.type',
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

  async getOne(id: string) {
    return await this.traceRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  async insertOne(postTraceDto: PostTraceDto) {
    return await this.traceRepository.insert(postTraceDto);
  }

  async deleteOne(id: string) {
    return await this.traceRepository.findOneAndDelete({
      _id: new ObjectId(id),
    });
  }

  async updateOne(id: string, patchTraceDto: PatchTraceDto) {
    return await this.traceRepository.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: patchTraceDto },
    );
  }

  async getTaxonsList() {
    return await this.traceRepository
      .aggregate([
        { $unwind: '$taxonsTraces' },
        {
          $group: {
            _id: {
              name: '$taxonsTraces.taxon.name',
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

  async getStationsList() {
    return await this.traceRepository
      .aggregate([
        {
          $group: {
            _id: {
              name: '$station.name',
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
