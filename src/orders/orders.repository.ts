import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { OrderDetail } from "src/order-details/entities/orderDetails.entity";
import { Order } from "./entities/order.entity";
import { Product } from "src/products/entities/product.entity";
import { User   } from "src/users/entities/user.entity";
import { Repository,  } from "typeorm";
import { UsersRepository } from '../users/users.repository';
import { ProductsRepository } from '../products/products.repository';


@Injectable()
export class OrdersRepository {
    constructor (
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
        @InjectRepository(OrderDetail)
        private orderDetailRepository: Repository<OrderDetail>,
        @InjectRepository (User) 
        private usersRepository: Repository<User>,
        @InjectRepository (Product)
        private productsRepository: Repository<Product>,
    ){}


async addOrder(userId: string, products: { id: string }[]) {
    let total = 0;

    // Verificamos usuario
    const user = await this.usersRepository.findOneBy({ id: userId });
    if (!user) {
          throw new Error(`Usuario con id ${userId} no encontrado`);
            }

    // Creamos orden
    const order = new Order();
    order.date = new Date();
    order.user = user;
    const newOrder = await this.ordersRepository.save(order);

    // Procesamos productos
    const productsArray = await Promise.all(
        products.map(async (element) => {
            const product = await this.productsRepository.findOneBy({ id: element.id });
            if (!product) {
                throw new NotFoundException(`Producto con id ${element.id} no encontrado`);
            }

            total += Number(product.price);

            const currentStock = Number(product.stock);
            if (isNaN(currentStock)) {
                throw new Error(`Stock inválido para el producto ${product.name}`);
            }
            if (currentStock <= 0) {
                throw new Error(`Stock insuficiente para el producto ${product.name}`);
            }

            const newStock = currentStock - 1;

            await this.productsRepository.update(
                { id: product.id },
                { stock: newStock }
            );

            return product;
        })
    );

    // Creamos orderDetail
    const orderDetail = new OrderDetail();
    orderDetail.price = Number(total.toFixed(2));
    orderDetail.products = productsArray;
    orderDetail.order = newOrder;

    await this.orderDetailRepository.save(orderDetail);

    // Retornamos orden con detalles
    return await this.ordersRepository.find({
        where: { id: newOrder.id },
        relations: { orderDetails: true },
    });
}






   async getOrder(id:string){
      const order = await this.ordersRepository.findOne({
        where:{id},
        relations: {
            orderDetails: {
                products: true
            },
        },
      });
      
      //Validamos que encuentre la roden, de otra forma devuelve undefined y no se debe 
      if(!order){
        throw new ErrorEvent(`Orden con id ${id} no encontrada`);
      }
      return order;
    }

}