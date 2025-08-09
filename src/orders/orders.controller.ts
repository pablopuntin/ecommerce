import { Controller, Post, Body, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Product } from 'src/products/entities/product.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  addOrder(@Body() order:any){

    const {userId, products} = order;
    return this.ordersService.addOrder(userId, products);
  }

  @Get(':id')
  getOrder(@Param('id', ParseUUIDPipe)id: string){
    return this.ordersService.getOrder(id);
  }
  



}
