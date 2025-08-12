import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Para que use ValidationPipe y transforme el body a DTO
  app.useGlobalPipes(new ValidationPipe()
);

  const port = process.env.PORT || 3000; // usa el .env o 3000 por defecto
  await app.listen(port);
  console.log(`Servidor escuchando en el puerto: ${port}`);
}
bootstrap();
