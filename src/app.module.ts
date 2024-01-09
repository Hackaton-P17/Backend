import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { NomenclatureModule } from './Modules/Nomenclature/nomenclature.module';
import { ParametersModule } from './Modules/Parameters/parameters.module';
import { PlanctonModule } from './Modules/Plancton/plancton.module';
import { ReleveModule } from './Modules/Releve/releve.module';
import { StationModule } from './Modules/Station/station.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env/.env.prod', 'env/.env.local', 'env/.env'],
      load: [configuration],
      isGlobal: true,
    }),
    NomenclatureModule,
    ParametersModule,
    PlanctonModule,
    ReleveModule,
    StationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
