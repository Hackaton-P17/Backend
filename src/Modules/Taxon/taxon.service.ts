import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxonEntity } from './taxon.entity';
import { PostTaxonDto } from './Dtos/postTaxon.dto';
import { PatchTaxonDto } from './Dtos/patchTaxon.dto';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class TaxonService {
  constructor(
    @InjectRepository(TaxonEntity)
    private readonly taxonRepository: MongoRepository<TaxonEntity>,
  ) {}
  async getAllTaxon() {
    return await this.taxonRepository.find();
  }

  async getTaxonById(id: string) {
    return await this.taxonRepository.findOneBy({ _id: new ObjectId(id) });
  }

  async insertOne(taxonDto: PostTaxonDto) {
    await this.taxonRepository.insert(taxonDto);
  }

  async patchOne(id: string, taxonDto: PatchTaxonDto) {
    await this.taxonRepository.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: taxonDto },
    );
  }

  async deleteOneById(id: string): Promise<boolean> {
    return (await this.taxonRepository.delete(id)).affected > 0;
  }
}
