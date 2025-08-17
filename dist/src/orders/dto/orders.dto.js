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
exports.OrdersDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const orderDetails_dto_1 = require("../../order-details/dto/orderDetails.dto");
const swagger_1 = require("@nestjs/swagger");
class OrdersDto {
    date;
    userId;
    orderDetailId;
    orderDetails;
    static _OPENAPI_METADATA_FACTORY() {
        return { date: { required: true, type: () => Date }, userId: { required: true, type: () => String, format: "uuid" }, orderDetailId: { required: false, type: () => String, format: "uuid" }, orderDetails: { required: false, type: () => require("../../order-details/dto/orderDetails.dto").OrderDetailsDto } };
    }
}
exports.OrdersDto = OrdersDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'fecha en formato dd/mm/yy',
        example: '12/08/2025'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha es obligatoria' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)({ message: 'Debe ser una fecha válida' }),
    (0, class_validator_1.MinDate)(new Date('2020-01-01'), { message: 'La fecha debe ser igual o posterior al 01/01/2020' }),
    __metadata("design:type", Date)
], OrdersDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'id del usuario obligatorio'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId es obligatorio' }),
    (0, class_validator_1.IsUUID)('4', { message: 'userId inválido' }),
    __metadata("design:type", String)
], OrdersDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { message: 'orderDetailId inválido' }),
    __metadata("design:type", String)
], OrdersDto.prototype, "orderDetailId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => orderDetails_dto_1.OrderDetailsDto),
    __metadata("design:type", orderDetails_dto_1.OrderDetailsDto)
], OrdersDto.prototype, "orderDetails", void 0);
//# sourceMappingURL=orders.dto.js.map