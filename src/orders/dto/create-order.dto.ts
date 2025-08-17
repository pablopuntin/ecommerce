import { ApiProperty } from '@nestjs/swagger';

class ProductDto {
  @ApiProperty({ example: 'd0c97381-258c-4507-ae7e-9df198a29c25', description: 'ID del producto' })
  id: string;
}

export class CreateOrderDto {
  @ApiProperty({ example: '4389bf34-f2db-4bd5-a7bf-406d98cfb0f3', description: 'ID del usuario que realiza la orden' })
  userId: string;

  @ApiProperty({ type: [ProductDto], description: 'Lista de productos a agregar a la orden' })
  products: ProductDto[];
}
