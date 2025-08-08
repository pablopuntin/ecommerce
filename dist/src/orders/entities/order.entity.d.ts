import { User } from '../../users/entities/user.entity';
import { OrderDetail } from '../../order-details/entities/orderDetails.entity';
export declare class Order {
    id: string;
    date: Date;
    user: User;
    orderDetails: OrderDetail;
}
