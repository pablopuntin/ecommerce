import { Controller, Post, Body, Get, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Product } from 'src/products/entities/product.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';
  
@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
    @UseGuards(AuthGuard)
  addOrder(@Body() order:any){

    const {userId, products} = order;
    return this.ordersService.addOrder(userId, products);
  }

  @Get(':id')
    @UseGuards(AuthGuard)
  getOrder(@Param('id', ParseUUIDPipe)id: string){
    return this.ordersService.getOrder(id);
  }
  



}
