import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("L'API du Plancton")
    .setDescription('')
    .setVersion('1.0')
    .addTag('plancton')
    .addTag('parameters')
    .addTag('releve')
    .addTag('nomenclature')
    .addTag('station')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(parseInt(process.env.APP_PORT, 10) || 3000);
}
bootstrap();
