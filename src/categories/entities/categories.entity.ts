import { Entity,PrimaryGeneratedColumn , Column, OneToMany, JoinColumn } from "typeorm";
import { Product } from '../../products/entities/product.entity';
import { ApiProperty } from "@nestjs/swagger";


@Entity({   name: 'categories'
})

export class Categories {
   
    @PrimaryGeneratedColumn('uuid')
    id: string;

     @ApiProperty({
        description: 'Nombre de la categoría',
        example: 'Electrónica',
      })
    @Column({ type: 'varchar', length: 50, unique:true })
    name: string;

      @ApiProperty({
        description: 'Descripción de la categoría',
        example: 'Productos electrónicos como teléfonos, laptops y tablets',
        required: false,
      })
    @Column({ type: 'text', nullable: true })
    description: string;

   //1:N con products
    @OneToMany(() => Product, product => product.categories)
    @JoinColumn({name: 'product_id'})
    products: Product[];
}