import { Order } from '../../orders/entities/order.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    isAdmin: boolean;
    orders: Order[];
}
