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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_entity_1 = require("../categories/entities/categories.entity");
const product_entity_1 = require("./entities/product.entity");
const data = require("../../asset/data.json");
const typeorm_2 = require("typeorm");
let ProductsRepository = class ProductsRepository {
    productsRepository;
    categoriesRepository;
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts(page, limit) {
        let products = await this.productsRepository.find({
            relations: {
                categories: true,
            }
        });
        const start = (page - 1) * limit;
        const end = start + limit;
        products = products.slice(start, end);
        return products;
    }
    async getProductById(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            return `Producto con ${id} no encontrado`;
        }
        return product;
    }
    async addProducts() {
        const categories = await this.categoriesRepository.find();
        await Promise.all(data.map(async (element) => {
            const category = categories.find((cat) => cat.name === element.category);
            if (!category)
                throw new Error(`La categoría ${element.category} no existe`);
            const product = new product_entity_1.Product();
            product.name = element.name;
            product.description = element.description;
            product.price = element.price;
            product.stock = element.stock;
            product.categories = category;
            await this.productsRepository.save(product);
        }));
        return 'Productos agregados';
    }
    async updateProduct(id, product) {
        await this.productsRepository.update(id, product);
        const updatedProduct = await this.productsRepository.findOneBy({
            id
        });
        return updatedProduct;
    }
    async createProd(product) {
        const existing = await this.productsRepository.findOneBy({
            name: product.name,
        });
        if (existing)
            throw new Error(`el producto ${product.name} ya existe`);
        await this.productsRepository.save(product);
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map