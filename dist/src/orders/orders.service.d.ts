import { OrdersRepository } from "./orders.repository";
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    addOrder(userId: string, products: any): Promise<string | import("./entities/order.entity").Order[]>;
    getOrder(id: string): Promise<string | import("./entities/order.entity").Order>;
}
