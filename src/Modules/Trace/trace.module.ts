import { Module } from '@nestjs/common';
import { TraceController } from './trace.controller';
import { TraceService } from './trace.service';
import { TraceEntity } from './trace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TraceEntity])],
  controllers: [TraceController],
  providers: [TraceService],
})
export class TraceModule {}
