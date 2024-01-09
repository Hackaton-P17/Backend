import { Module } from '@nestjs/common';
import { ParametersController } from './parameters.controller';
import { ParametersService } from './parameters.service';
import { PlanctonEntity } from '../Plancton/plancton.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlanctonEntity])],
  controllers: [ParametersController],
  providers: [ParametersService],
})
export class ParametersModule {}
