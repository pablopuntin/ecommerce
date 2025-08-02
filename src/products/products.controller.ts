import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './update-product.dto';
import { CreateProductDto } from './create-product.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}


  // 🔹 GET /products
  @Get()
  getProducts(
    @Query('page') page: number,
    @Query('limit') limit: number 
  ) {
    return this.productService.getPaginatedProducts(page, limit);
    
  }


  // 🔹 GET /products/:id
  @Get(':id')
  getProductById(@Param('id') id: string) {
    
    return this.productService.getProductById(Number(id));
  }

@Post()
@HttpCode(201)
createProduct(@Body() data: CreateProductDto) {
  return this.productService.createProduct(data);
}

@Put(':id')
updateProductbyId(@Param('id') id: string, @Body() data: UpdateProductDto) {
  return this.productService.updateProductById(Number(id), data);
}


  @Delete(':id')
  deleteProductById(@Param('id') id: string ) {
    
    return this.productService.deleteProductById(Number(id)); 
  }
}

