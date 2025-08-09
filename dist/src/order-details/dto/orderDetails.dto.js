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
exports.OrderDetailsDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProductInOrderDto {
    productId;
    quantity;
}
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'productId inválido' }),
    __metadata("design:type", String)
], ProductInOrderDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'La cantidad debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'La cantidad mínima es 1' }),
    __metadata("design:type", Number)
], ProductInOrderDto.prototype, "quantity", void 0);
class OrderDetailsDto {
    products;
}
exports.OrderDetailsDto = OrderDetailsDto;
__decorate([
    (0, class_validator_1.IsArray)({ message: 'products debe ser un array' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Debe haber al menos un producto' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProductInOrderDto),
    __metadata("design:type", Array)
], OrderDetailsDto.prototype, "products", void 0);
//# sourceMappingURL=orderDetails.dto.js.map