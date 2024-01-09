import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxonEntity } from './taxon.entity';
import { TaxonController } from './taxon.controller';
import { TaxonService } from './taxon.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaxonEntity])],
  controllers: [TaxonController],
  providers: [TaxonService],
})
export class TaxonModule {}
