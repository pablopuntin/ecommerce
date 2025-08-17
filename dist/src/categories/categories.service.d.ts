import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private readonly categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    getAllCategories(): Promise<import("./entities/categories.entity").Categories[]>;
    addCategories(data: CreateCategoryDto[]): Promise<string>;
}
