import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categories } from "src/categories/entities/categories.entity";
import { Product } from "./entities/product.entity";
import * as data from '../../asset/data.json'
import { Repository } from "typeorm";

@Injectable()
export class ProductsRepository{
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ){}

  async getProducts (page:number, limit:number): Promise<Product[]>{
    let products = await this.productsRepository.find({
      relations:{
        categories: true,
      }
    });
    const start = (page-1) * limit;
    const end = start + limit;
    products =products.slice(start, end);
    return products;
  }

 
    async getProductById(id: string) {
        const product = await this.productsRepository.findOneBy({id});
        if (!product) {return `Producto con ${id} no encontrado`;
    }
        return product;
    }

   
       async addProducts() {
  const categories = await this.categoriesRepository.find();

  await Promise.all(
    data.map(async (element) => {
      const category = categories.find((cat) => cat.name === element.category);
      if (!category) 
        throw new Error(`La categoría ${element.category} no existe`);

      const product = new Product();
      product.name = element.name;
      product.description = element.description;
      product.price = element.price;
      product.stock = element.stock;
      product.categories = category;

      await this.productsRepository.save(product); 
    })
  );

  return 'Productos agregados';
}




    async updateProduct(id: string, product: Product){
      await this.productsRepository.update(id, product);
      const updatedProduct = await this.productsRepository.findOneBy({
        id
      });
      return updatedProduct;
    }

  }