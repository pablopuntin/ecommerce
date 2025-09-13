import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// ⚡ Una sola configuración base
const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/migrations/*.{ts,js}'],
  migrationsTableName: 'migrations',
  synchronize: false, // nunca en prod
  logging: false,
  dropSchema: false,
  ssl: { rejectUnauthorized: false },
  autoLoadEntities: true  
};

// 👉 Exportas para NestJS
export default typeOrmConfig;

// 👉 Exportas para CLI (migraciones)
export const connectionSource = new DataSource(typeOrmConfig);
