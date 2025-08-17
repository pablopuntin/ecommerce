import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<import("./entities/categories.entity").Categories[]>;
    addCategories(data: CreateCategoryDto[]): Promise<string>;
}
