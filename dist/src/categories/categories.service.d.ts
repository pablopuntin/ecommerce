import { CategoriesRepository } from './categories.repository';
export declare class CategoriesService {
    private readonly categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    getAllCategories(): Promise<import("./entities/categories.entity").Categories[]>;
    addCategories(): Promise<string>;
}
