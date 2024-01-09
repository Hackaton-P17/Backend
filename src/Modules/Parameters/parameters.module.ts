import { Module } from '@nestjs/common';
import { ParametersController } from './parameters.controller';
import { ParametersService } from './parameters.service';
import { TaxonEntity } from '../Taxon/taxon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaxonEntity])],
  controllers: [ParametersController],
  providers: [ParametersService],
})
export class ParametersModule {}
