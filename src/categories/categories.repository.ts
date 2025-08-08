
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';
import * as data from '../../asset/data.json'
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CategoriesRepository {
  constructor(
      @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async getAllCategories() {
    return await this.categoriesRepository.find();
    }

   async addCategories(){
  data.map(async(element)=>{
   await this.categoriesRepository
   .createQueryBuilder()
   .insert()
   .into(Categories)
   .values({name: element.category})
   .orIgnore()
   .execute();

  })
  return 'Categorias agregadas'
  }

//prueba codigo gpt
// async addCategories() {
//   const values = data.map((el) => ({ name: el.category }));

//   await this.categoriesRepository
//     .createQueryBuilder()
//     .insert()
//     .into(Categories)
//     .values(values)
//     .orIgnore()
//     .execute();

//   return 'Categorías agregadas';
// }



}