import { OrderDetail } from "src/order-details/entities/orderDetails.entity";
import { Order } from "./entities/order.entity";
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
export declare class OrdersRepository {
    private ordersRepository;
    private orderDetailRepository;
    private usersRepository;
    private productsRepository;
    constructor(ordersRepository: Repository<Order>, orderDetailRepository: Repository<OrderDetail>, usersRepository: Repository<User>, productsRepository: Repository<Product>);
    addOrder(userId: string, products: {
        id: string;
    }[]): Promise<string | Order[]>;
    getOrder(id: string): Promise<string | Order>;
}
