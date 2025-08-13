import { Get, Post, Query,Param, Put, Body, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Controller } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { AuthGuard } from "src/auth/guard/auth.guard";


@Controller('products')
export class ProductsController {
  constructor (private readonly productService: ProductsService){}

  @Get()
  getProducts(@Query('page') page:string, @Query('limit')limit: string){
    if (page && limit)
      return this.productService.getProducts(Number(page), Number(limit));
    return this.productService.getProducts(Number(1), Number(5));
  }

  @Post ('seeder')
  addProducts(){
    return this.productService.addProducts();
  }

  
  // Nuevo: obtener producto por ID
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  // Nuevo: actualizar producto por ID
  @Put(':id')
    @UseGuards(AuthGuard)
  updateProduct(@Param('id') id: string, @Body() product: Product) {
    return this.productService.updateProduct(id, product);
  }

  

}