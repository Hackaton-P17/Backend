import { Module } from '@nestjs/common';
import { ReleveController } from './releve.controller';
import { ReleveService } from './releve.service';
import { ReleveEntity } from './releve.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReleveEntity])],
  controllers: [ReleveController],
  providers: [ReleveService],
})
export class ReleveModule {}
