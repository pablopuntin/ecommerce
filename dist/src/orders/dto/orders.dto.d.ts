import { OrderDetailsDto } from '../../order-details/dto/orderDetails.dto';
export declare class OrdersDto {
    date: Date;
    userId: string;
    orderDetailId?: string;
    orderDetails?: OrderDetailsDto;
}
