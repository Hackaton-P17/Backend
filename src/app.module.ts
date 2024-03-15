import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { NomenclatureModule } from './Modules/Nomenclature/nomenclature.module';
import { ParametersModule } from './Modules/Parameters/parameters.module';
import { TaxonModule } from './Modules/Taxon/taxon.module';
import { TraceModule } from './Modules/Trace/trace.module';
import { StationModule } from './Modules/Station/station.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraceEntity } from './Modules/Trace/trace.entity';
import { TaxonEntity } from './Modules/Taxon/taxon.entity';
import { AuthModule } from './Modules/Auth/auth.module';
import { UserModule } from './Modules/User/user.module';
import { UserEntity } from './Modules/User/user.entity';

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
      entities: [TraceEntity, TaxonEntity, UserEntity],
      synchronize: true,
    }),
    NomenclatureModule,
    ParametersModule,
    TaxonModule,
    TraceModule,
    StationModule,
    // TODO à implémenter à la fin
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
