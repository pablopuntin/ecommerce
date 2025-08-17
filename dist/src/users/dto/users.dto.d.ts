import { Order } from "src/orders/entities/order.entity";
export declare class CreateUserDto {
    id: string;
    orders: Order[];
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    isAdmin?: boolean;
}
export declare class LoginUserDto {
    email: string;
    password: string;
}
