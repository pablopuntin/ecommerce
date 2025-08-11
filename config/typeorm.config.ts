// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


export const typeOrmConfigAsync = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
   port: parseInt(configService.get<string>('DB_PORT') ?? '5432'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    logging: true,
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true, // true solo en desarrollo
    dropSchema: true, // no eliminar esquemas al reiniciar
    migrations: ['dist/migrations/*.{ts,js}'],
    migrationsTableName: 'migrations',
  }),
};
