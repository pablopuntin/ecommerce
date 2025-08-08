import { Categories } from '../../categories/entities/categories.entity';
import { OrderDetail } from '../../order-details/entities/orderDetails.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgURL: string;
    categories: Categories;
    orderDetails: OrderDetail[];
}
