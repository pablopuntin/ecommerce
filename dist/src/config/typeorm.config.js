"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
const typeOrmConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.{ts,js}'],
    migrations: ['dist/migrations/*.{ts,js}'],
    migrationsTableName: 'migrations',
    synchronize: false,
    logging: false,
    dropSchema: false,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
};
exports.default = typeOrmConfig;
exports.connectionSource = new typeorm_1.DataSource(typeOrmConfig);
//# sourceMappingURL=typeorm.config.js.map