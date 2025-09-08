import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
declare const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions;
export default typeOrmConfig;
export declare const connectionSource: DataSource;
