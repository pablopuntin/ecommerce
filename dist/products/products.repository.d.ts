export declare class ProductsRepository {
    private products;
    getPaginatedProducts(page: number, limit: number): Promise<{
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
    getProductById(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    } | null>;
    createProduct(data: any): Promise<any>;
    updateProductById(id: number, data: any): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    } | null>;
    deleteProductById(id: number): Promise<boolean>;
}
