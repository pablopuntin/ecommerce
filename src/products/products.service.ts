import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {

  constructor(private productsRepository: ProductsRepository) {}

 
  // 🔹 GET /products
  getPaginatedProducts(page: number, limit: number) {
    return this.productsRepository.getPaginatedProducts(page, limit);
  }

  // 🔹 GET /products/:id
  getProductById(id: number) {
    return this.productsRepository.getProductById(id);
  }

  // 🔹 POST /products
  createProduct(data) {
    return this.productsRepository.createProduct(data);
  }

  // 🔹 PUT /products/:id
  updateProductById(id: number, data) {
    return this.productsRepository.updateProductById(id, data);
  }

  // 🔹 DELETE /products/:id
  deleteProductById(id: number) {
    return this.productsRepository.deleteProductById(id);
  }
  


}
