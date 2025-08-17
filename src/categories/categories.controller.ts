import { Controller, Get, Post, Body } from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { ApiBearerAuth, ApiBody } from "@nestjs/swagger";
import {CreateCategoryDto} from './dto/create-category.dto'




@Controller('categories')
export class CategoriesController{
  constructor(private readonly categoriesService: CategoriesService){}


@Get()
  getAllCategories(){
    return this.categoriesService.getAllCategories()
  }


 @ApiBearerAuth()
  @Post('seeder')
  @ApiBody({ type: [CreateCategoryDto] }) // 👈 importante: array de DTOs
  addCategories(@Body() data: CreateCategoryDto[]) {
    return this.categoriesService.addCategories(data); // 👈 llama al service, no al repo
  }




}

