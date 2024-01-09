import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanctonEntity } from './plancton.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanctonEntity])],
  controllers: [],
  providers: [],
})
export class PlanctonModule {}
