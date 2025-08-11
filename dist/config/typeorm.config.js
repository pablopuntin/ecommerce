"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (configService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT') ?? '5432'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        logging: true,
        entities: ['dist/**/*.entity.{ts,js}'],
        synchronize: true,
        dropSchema: true,
        migrations: ['dist/migrations/*.{ts,js}'],
        migrationsTableName: 'migrations',
    }),
};
//# sourceMappingURL=typeorm.config.js.map