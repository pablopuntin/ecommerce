import { Get, Post, Query,Param, Put, Body, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Controller } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { Role } from "src/auth/roles.enum";
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { ApiBearerAuth, ApiBody } from "@nestjs/swagger";
import {UpdateProductDto} from './dto/update-product.dto'


@Controller('products')
export class ProductsController {
  constructor (private readonly productService: ProductsService){}

  @Get()
  getProducts(@Query('page') page:string, @Query('limit')limit: string){
    if (page && limit)
      return this.productService.getProducts(Number(page), Number(limit));
    return this.productService.getProducts(Number(1), Number(5));
  }

  @Get ('seeder')
  addProducts(){
    return this.productService.addProducts();
  }

  
 
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

 @ApiBearerAuth()
 @ApiBody({ type: UpdateProductDto })
  @Put(':id')
     @Roles(Role.Admin)
      @UseGuards(AuthGuard, RolesGuard)
  updateProduct(@Param('id') id: string, @Body() product: Product) {
    return this.productService.updateProduct(id, product);
  }

  

}