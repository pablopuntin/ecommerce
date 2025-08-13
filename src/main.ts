import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Para que use ValidationPipe y transforme el body a DTO
  app.useGlobalPipes(new ValidationPipe());

  //Swagger
  // const options = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addBearerAuth()//habilita uso de token
  //   .build();

  // const DocumentFactory = () =>SwaggerModule.

   const configService = app.get(ConfigService);
const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
  console.log(`Servidor escuchando en el puerto: ${port}`);
}
bootstrap();
