import { Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';
export declare class CategoriesRepository {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Categories>);
    getAllCategories(): Promise<Categories[]>;
    addCategories(data: {
        category: string;
    }[]): Promise<string>;
}
