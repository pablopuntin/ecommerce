import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    addOrder(order: any): Promise<string | import("./entities/order.entity").Order[]>;
    getOrder(id: string): Promise<string | import("./entities/order.entity").Order>;
}
