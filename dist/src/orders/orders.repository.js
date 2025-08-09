"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const orderDetails_entity_1 = require("../order-details/entities/orderDetails.entity");
const order_entity_1 = require("./entities/order.entity");
const product_entity_1 = require("../products/entities/product.entity");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
let OrdersRepository = class OrdersRepository {
    ordersRepository;
    orderDetailRepository;
    usersRepository;
    productsRepository;
    constructor(ordersRepository, orderDetailRepository, usersRepository, productsRepository) {
        this.ordersRepository = ordersRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.usersRepository = usersRepository;
        this.productsRepository = productsRepository;
    }
    async addOrder(userId, products) {
        let total = 0;
        const user = await this.usersRepository.findOneBy({ id: userId });
        if (!user) {
            throw new Error(`Usuario con id ${userId} no encontrado`);
        }
        const order = new order_entity_1.Order();
        order.date = new Date();
        order.user = user;
        const newOrder = await this.ordersRepository.save(order);
        const productsArray = await Promise.all(products.map(async (element) => {
            const product = await this.productsRepository.findOneBy({ id: element.id });
            if (!product) {
                throw new common_1.NotFoundException(`Producto con id ${element.id} no encontrado`);
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
            await this.productsRepository.update({ id: product.id }, { stock: newStock });
            return product;
        }));
        const orderDetail = new orderDetails_entity_1.OrderDetail();
        orderDetail.price = Number(total.toFixed(2));
        orderDetail.products = productsArray;
        orderDetail.order = newOrder;
        await this.orderDetailRepository.save(orderDetail);
        return await this.ordersRepository.find({
            where: { id: newOrder.id },
            relations: { orderDetails: true },
        });
    }
    async getOrder(id) {
        const order = await this.ordersRepository.findOne({
            where: { id },
            relations: {
                orderDetails: {
                    products: true
                },
            },
        });
        if (!order) {
            throw new ErrorEvent(`Orden con id ${id} no encontrada`);
        }
        return order;
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(orderDetails_entity_1.OrderDetail)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map