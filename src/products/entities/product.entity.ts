import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from '../../categories/entities/categories.entity';
import { OrderDetail } from '../../order-details/entities/orderDetails.entity';


@Entity({    name: 'products'
})
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column()
    stock: number;

  @Column({type:'text', 
    default: 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg'})
  imgURL: string;

    
 @ManyToOne(() => Categories, (categories) => categories.products)
 @JoinColumn({name: 'category_id'})
categories: Categories;

    //relaacion N:N con orderDetails
    @ManyToMany(() => OrderDetail, (orderDetails) => orderDetails.products)
   
    orderDetails: OrderDetail[];


}