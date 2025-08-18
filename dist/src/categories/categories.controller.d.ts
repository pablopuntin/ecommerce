import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<import("./entities/categories.entity").Categories[]>;
    addCategories(): Promise<string>;
}
