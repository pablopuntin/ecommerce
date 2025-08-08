"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    products = [
        {
            id: 1,
            name: 'lavandina',
            description: 'lavandina concentrada 1L',
            price: 500,
            stock: true,
            imgUrl: 'https://example.com/lavandina.jpg',
        },
        {
            id: 2,
            name: 'Fideo',
            description: 'fideo x 1 kg.',
            price: 2500,
            stock: true,
            imgUrl: 'https://example.com/fideo.jpg',
        },
        {
            id: 3,
            name: 'Arroz',
            description: 'aloz gallo olo',
            price: 1500,
            stock: true,
            imgUrl: 'https://example.com/arrroz.jpg',
        }
    ];
    async getPaginatedProducts(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = this.products.slice(start, end);
        return {
            total: this.products.length,
            page,
            limit,
            data: paginated
        };
    }
    async getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product)
            return null;
        return product;
    }
    async createProduct(data) {
        const newProduct = {
            id: this.products.length + 1,
            ...data,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    async updateProductById(id, data) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1)
            return null;
        this.products[index] = { ...this.products[index], ...data };
        return this.products[index];
    }
    async deleteProductById(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1)
            return false;
        this.products.splice(index, 1);
        return true;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=product.repository.js.map