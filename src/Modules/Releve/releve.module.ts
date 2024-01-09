import { Module } from '@nestjs/common';
import { ReleveController } from './releve.controller';
import { ReleveService } from './releve.service';
import { Releve } from './releve.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Releve])],
  controllers: [ReleveController],
  providers: [ReleveService],
})
export class ReleveModule {}
