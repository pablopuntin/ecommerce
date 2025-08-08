import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    JoinColumn,
    ManyToMany,
    JoinTable,
    OneToOne
} from "typeorm";
import { Order } from '../../orders/entities/order.entity';
import { Product } from '../../products/entities/product.entity';


@Entity({ name: 'order_details' })
export class OrderDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;
 
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;


@ManyToMany(() => Product)
@JoinTable({
    name: 'ORDERDETAILS_PRODUCTS',
    joinColumns: [
        { name: 'order_detail_id', referencedColumnName: 'id' }
    ],
    inverseJoinColumns: [
        { name: 'product_id', referencedColumnName: 'id' }
    ]
})
products: Product[];


    // relacion 1:1 con orders
    @OneToOne(() => Order, order => order.orderDetails)
    @JoinColumn({ name: 'order_id' })
    order: Order;
}