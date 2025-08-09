import { CreateUserDto } from './users.dto';
import { Order } from 'src/orders/entities/order.entity';
declare const UpdateusertDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateusertDto extends UpdateusertDto_base {
    id: string;
    orders: Order[];
    country: string;
    city: string;
    name: string;
    email: string;
    password: string;
    phone: number;
}
export {};
