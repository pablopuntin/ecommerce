 import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
 import { User } from '../../users/entities/user.entity';
 import { OrderDetail } from '../../order-details/entities/orderDetails.entity';
 import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


 @Entity({name: 'orders'})
 export class Order {
   @ApiHideProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @ApiProperty({
       description: 'fecha en formato dd/mm/yyyy',
       example: '13/08/2025'
     })
     @Column({type: 'date'})
     date: Date;


   @ManyToOne(()=> User, (user)=> user.orders)
   @JoinColumn({name: 'user_id'})
     user: User;

     //relacion 1:1 con orderDetails
     @OneToOne(() => OrderDetail, orderDetails => orderDetails.order)
    
     orderDetails: OrderDetail;
    



 }


