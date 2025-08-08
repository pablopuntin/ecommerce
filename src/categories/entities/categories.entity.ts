import { Entity,PrimaryGeneratedColumn , Column, OneToMany, JoinColumn } from "typeorm";
import { Product } from '../../products/entities/product.entity';



@Entity({   name: 'categories'
})

export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50, unique:true })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

   //1:N con products
    @OneToMany(() => Product, product => product.categories)
    @JoinColumn({name: 'product_id'})
    products: Product[];
}