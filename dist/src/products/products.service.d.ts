import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { CreateProductDto } from "./dto/create-product.dto";
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(page: number, limit: number): Promise<Product[]>;
    addProducts(): Promise<string>;
    getProductById(id: string): Promise<string | Product>;
    updateProduct(id: string, product: Product): Promise<Product | null>;
    createProd(product: CreateProductDto): Promise<void>;
}
