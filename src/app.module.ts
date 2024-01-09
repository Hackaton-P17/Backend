import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { NomenclatureModule } from './Modules/Nomenclature/nomenclature.module';
import { ParametersModule } from './Modules/Parameters/parameters.module';
import { PlanctonModule } from './Modules/Plancton/plancton.module';
import { ReleveModule } from './Modules/Releve/releve.module';
import { StationModule } from './Modules/Station/station.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReleveEntity } from './Modules/Releve/releve.entity';
import { PlanctonEntity } from './Modules/Plancton/plancton.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env/.env.local', 'env/.env.prod', 'env/.env'],
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      authSource: 'admin',
      type: 'mongodb',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      entities: [ReleveEntity, PlanctonEntity],
      synchronize: true,
    }),
    NomenclatureModule,
    ParametersModule,
    PlanctonModule,
    ReleveModule,
    StationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
