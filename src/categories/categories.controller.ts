import { Controller, Get, Post } from "@nestjs/common";
import { CategoriesService } from './categories.service';


@Controller('categories')
export class CategoriesController{
  constructor(private readonly categoriesService: CategoriesService){}


@Get()
  getAllCategories(){
    return this.categoriesService.getAllCategories()
  }

  @Post('seeder')
  addCategories(){
    return this.categoriesService.addCategories();
  }




}

