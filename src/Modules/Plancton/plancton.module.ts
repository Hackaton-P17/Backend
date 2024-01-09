import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanctonEntity } from './plancton.entity';
import { PlanctonController } from './plancton.controller';
import { PlanctonService } from './plancton.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlanctonEntity])],
  controllers: [PlanctonController],
  providers: [PlanctonService],
})
export class PlanctonModule {}
