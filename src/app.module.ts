import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import {LoggerMiddeleware} from './middlewares/logger.middleware'
import { JwtModule } from '@nestjs/jwt';
import { AppService } from './app/app.service';
import { AppController } from './app/app.controller';



@Module({
  imports: [UsersModule, ProductsModule, AuthModule, CategoriesModule, OrdersModule, OrderDetailsModule, FileUploadModule,
     ConfigModule.forRoot({ isGlobal: true }), // habilita variables de entorno
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '60m'},
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure (consumer: MiddlewareConsumer){
    consumer
            .apply(LoggerMiddeleware)
            .forRoutes('*')
  }
}
