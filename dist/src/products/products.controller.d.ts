import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(page: string, limit: string): Promise<import("./entities/product.entity").Product[]>;
    addProducts(): Promise<string>;
}
