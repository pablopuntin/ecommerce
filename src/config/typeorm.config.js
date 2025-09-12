"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
var typeorm_1 = require("typeorm");
// ⚡ Una sola configuración base
var typeOrmConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt((_a = process.env.DB_PORT) !== null && _a !== void 0 ? _a : '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.{ts,js}'],
    migrations: ['dist/migrations/*.{ts,js}'],
    migrationsTableName: 'migrations',
    synchronize: false, // nunca en prod
    logging: false,
    dropSchema: false,
};
// 👉 Exportas para NestJS
exports.default = typeOrmConfig;
// 👉 Exportas para CLI (migraciones)
exports.connectionSource = new typeorm_1.DataSource(typeOrmConfig);
