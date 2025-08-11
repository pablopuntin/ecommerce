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

    @Column({ type: 'varchar', length: 50 })
    email: string;

    //ya trae por defecto nullable: false
    @Column({ type: 'varchar', length: 70, nullable: false })
    password: string;

    @Column({type: 'int'})
    phone: number;

    @Column({ type: 'varchar', length: 50 })
    country: string;

    @Column({ type: 'varchar', length: 100 })
    address: string;

    @Column({ type: 'varchar', length: 50 })
    city: string;

    @Column({default: false})
    isAdmin: boolean;

    //relacion 1:N con orders
    @OneToMany(() => Order, order => order.user)
    @JoinColumn({name: 'order_id'})
    orders: Order[];
   



}