import {v4 as uuid} from 'uuid';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from '../../orders/entities/order.entity';



@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    email: string;

   
    @Column({ type: 'varchar', length: 70, nullable: false })
    password: string;

    @Column({type: 'bigint'})
    phone: number;

    @Column({ type: 'varchar', length: 50 })
    country: string;

    @Column({ type: 'varchar', length: 100 })
    address: string;

    @Column({ type: 'varchar', length: 50 })
    city: string;

    @Column({default: false})
    isAdmin: boolean;

    
    @OneToMany(() => Order, order => order.user)
    @JoinColumn({name: 'order_id'})
    orders: Order[];
   



}