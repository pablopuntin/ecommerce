import { Injectable } from "@nestjs/common";
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService{
  constructor(
    private  productsRepository: ProductsRepository){}

    getProducts(page: number, limit:number){
      return this.productsRepository.getProducts(page, limit);
    }

    addProducts(){
      return this.productsRepository.addProducts();
    }

    getProductById(id:string){
      return this.productsRepository.getProductById(id);
    }

    updateProduct(id:string, product: Product) {
        return this.productsRepository.updateProduct(id, product);
    }
  
    //rutas nuevas
    async createProd(product: CreateProductDto){
      return await this.productsRepository.createProd(product)
    }

  
}