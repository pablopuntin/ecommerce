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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../products/entities/product.entity");
const swagger_1 = require("@nestjs/swagger");
let Categories = class Categories {
    id;
    name;
    description;
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] } };
    }
};
exports.Categories = Categories;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Categories.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la categoría',
        example: 'Electrónica',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción de la categoría',
        example: 'Productos electrónicos como teléfonos, laptops y tablets',
        required: false,
    }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Categories.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, product => product.categories),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Array)
], Categories.prototype, "products", void 0);
exports.Categories = Categories = __decorate([
    (0, typeorm_1.Entity)({ name: 'categories'
    })
], Categories);
//# sourceMappingURL=categories.entity.js.map