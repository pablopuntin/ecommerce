import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Para que use ValidationPipe y transforme el body a DTO
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);

  const config = new DocumentBuilder()
    .setTitle('Proyect Modulo 04')
    .setDescription('Api desarrollada con NestJs')
    .setVersion('1.0.0')
    .addBearerAuth( )
     .build();

  const documentFactory = () =>SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, documentFactory);

   const configService = app.get(ConfigService);
const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
  console.log(`Servidor escuchando en el puerto: ${port}`);
}
bootstrap();
