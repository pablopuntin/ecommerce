import { Controller, Post, Body, Get, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Product } from 'src/products/entities/product.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import {ApiBearerAuth, ApiBody,ApiParam } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
  
@ApiBearerAuth()
@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  
  @Post()
    @UseGuards(AuthGuard)
    @ApiBody({ type: CreateOrderDto })
    addOrder(@Body() order:CreateOrderDto){

    const {userId, products} = order;
    return this.ordersService.addOrder(userId, products);
  }

  @Get(':id')
    @UseGuards(AuthGuard)
      @ApiParam({ name: 'id', type: 'string', format: 'uuid', description: 'ID de la orden' })
  getOrder(@Param('id', ParseUUIDPipe)id: string){
    return this.ordersService.getOrder(id);
  }
  



}
