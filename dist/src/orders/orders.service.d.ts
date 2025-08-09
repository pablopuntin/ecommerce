import { OrdersRepository } from "./orders.repository";
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    addOrder(userId: string, products: any): Promise<import("./entities/order.entity").Order[]>;
    getOrder(id: string): Promise<import("./entities/order.entity").Order>;
}
