 import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
 import { User } from '../../users/entities/user.entity';
 import { OrderDetail } from '../../order-details/entities/orderDetails.entity';
 import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


 @Entity({name: 'orders'})
 export class Order {
  
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @Column({type: 'date'})
     date: Date;


   @ManyToOne(()=> User, (user)=> user.orders)
   @JoinColumn({name: 'user_id'})
     user: User;

     //relacion 1:1 con orderDetails
     @OneToOne(() => OrderDetail, orderDetails => orderDetails.order)
    
     orderDetails: OrderDetail;
    



 }


