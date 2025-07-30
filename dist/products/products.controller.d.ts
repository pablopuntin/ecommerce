import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(): string;
}
