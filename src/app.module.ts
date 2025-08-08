import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './database/typeorm.config';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';




@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }), // habilita variables de entorno
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule, ProductsModule, AuthModule, CategoriesModule, OrdersModule, OrderDetailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
