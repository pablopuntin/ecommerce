import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Para que use ValidationPipe y transforme el body a DTO
  app.useGlobalPipes(new ValidationPipe()
);

  await app.listen(3000);
  console.log('Servidor escuchando en el puerto 3000');
}
bootstrap();
