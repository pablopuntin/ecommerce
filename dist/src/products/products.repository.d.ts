import { Categories } from "src/categories/entities/categories.entity";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
export declare class ProductsRepository {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: Repository<Product>, categoriesRepository: Repository<Categories>);
    getProducts(page: number, limit: number): Promise<Product[]>;
    getProductById(id: string): Promise<string | Product>;
    addProducts(): Promise<string>;
    updateProduct(id: string, product: Product): Promise<Product | null>;
}
