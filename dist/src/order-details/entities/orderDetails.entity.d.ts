import { Order } from '../../orders/entities/order.entity';
import { Product } from '../../products/entities/product.entity';
export declare class OrderDetail {
    id: string;
    price: number;
    products: Product[];
    order: Order;
}
