import { Controller, Get, Post, Body } from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { ApiBearerAuth, ApiBody } from "@nestjs/swagger";

@Controller('categories')
export class CategoriesController{
  constructor(private readonly categoriesService: CategoriesService){}


@Get()
  getAllCategories(){
    return this.categoriesService.getAllCategories()
  }


@ApiBearerAuth()
@Get('seeder')
addCategories() {
  return this.categoriesService.addCategories(); }

}

