import { Injectable } from "@nestjs/common";
import {CategoriesRepository} from './categories.repository'
import {CreateCategoryDto} from './dto/create-category.dto'


@Injectable()
export class CategoriesService{
constructor (private readonly categoriesRepository: CategoriesRepository){}

getAllCategories(){
  return this.categoriesRepository.getAllCategories();
}

 addCategories(data: CreateCategoryDto[]) {
    return this.categoriesRepository.addCategories(data);
  }

}