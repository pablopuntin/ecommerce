import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from '../config/typeorm.config';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import {LoggerMiddeleware} from './middlewares/logger.middleware'
import { JwtModule } from '@nestjs/jwt';




@Module({
  imports: [
     ConfigModule.forRoot({ isGlobal: true }), // habilita variables de entorno
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule, ProductsModule, AuthModule, CategoriesModule, OrdersModule, OrderDetailsModule, FileUploadModule,
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '60m'},
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure (consumer: MiddlewareConsumer){
    consumer
            .apply(LoggerMiddeleware)
            .forRoutes('*')
  }
}
