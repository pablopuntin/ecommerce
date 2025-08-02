import { ProductsService } from './products.service';
import { UpdateProductDto } from './update-product.dto';
import { CreateProductDto } from './create-product.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(page: number, limit: number): Promise<{
        total: number;
        page: number;
        limit: number;
        data: {
            id: number;
            name: string;
            description: string;
            price: number;
            stock: boolean;
            imgUrl: string;
        }[];
    }>;
    getProductById(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    } | null>;
    createProduct(data: CreateProductDto): Promise<any>;
    updateProductbyId(id: string, data: UpdateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    } | null>;
    deleteProductById(id: string): Promise<boolean>;
}
