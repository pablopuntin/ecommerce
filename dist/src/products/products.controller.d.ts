import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(page: string, limit: string): Promise<Product[]>;
    addProducts(): Promise<string>;
    getProductById(id: string): Promise<string | Product>;
    updateProduct(id: string, product: Product): Promise<Product | null>;
    create(product: CreateProductDto): Promise<void>;
}
