"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersDto = void 0;
var openapi = require("@nestjs/swagger");
// orders.dto.ts
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var orderDetails_dto_1 = require("../../order-details/dto/orderDetails.dto");
var swagger_1 = require("@nestjs/swagger");
var OrdersDto = function () {
    var _a;
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _orderDetailId_decorators;
    var _orderDetailId_initializers = [];
    var _orderDetailId_extraInitializers = [];
    var _orderDetails_decorators;
    var _orderDetails_initializers = [];
    var _orderDetails_extraInitializers = [];
    return _a = /** @class */ (function () {
            function OrdersDto() {
                this.date = __runInitializers(this, _date_initializers, void 0);
                this.userId = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.orderDetailId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _orderDetailId_initializers, void 0));
                this.orderDetails = (__runInitializers(this, _orderDetailId_extraInitializers), __runInitializers(this, _orderDetails_initializers, void 0));
                __runInitializers(this, _orderDetails_extraInitializers);
            }
            OrdersDto._OPENAPI_METADATA_FACTORY = function () {
                return { date: { required: true, type: function () { return Date; } }, userId: { required: true, type: function () { return String; }, format: "uuid" }, orderDetailId: { required: false, type: function () { return String; }, format: "uuid" }, orderDetails: { required: false, type: function () { return require("../../order-details/dto/orderDetails.dto").OrderDetailsDto; } } };
            };
            return OrdersDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _date_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'fecha en formato dd/mm/yy',
                    example: '12/08/2025'
                }), (0, class_validator_1.IsNotEmpty)({ message: 'La fecha es obligatoria' }), (0, class_transformer_1.Type)(function () { return Date; }), (0, class_validator_1.IsDate)({ message: 'Debe ser una fecha válida' }), (0, class_validator_1.MinDate)(new Date('2020-01-01'), { message: 'La fecha debe ser igual o posterior al 01/01/2020' })];
            _userId_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'id del usuario obligatorio'
                }), (0, class_validator_1.IsNotEmpty)({ message: 'userId es obligatorio' }), (0, class_validator_1.IsUUID)('4', { message: 'userId inválido' })];
            _orderDetailId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUUID)('4', { message: 'orderDetailId inválido' })];
            _orderDetails_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.ValidateNested)(), (0, class_transformer_1.Type)(function () { return orderDetails_dto_1.OrderDetailsDto; })];
            __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _orderDetailId_decorators, { kind: "field", name: "orderDetailId", static: false, private: false, access: { has: function (obj) { return "orderDetailId" in obj; }, get: function (obj) { return obj.orderDetailId; }, set: function (obj, value) { obj.orderDetailId = value; } }, metadata: _metadata }, _orderDetailId_initializers, _orderDetailId_extraInitializers);
            __esDecorate(null, null, _orderDetails_decorators, { kind: "field", name: "orderDetails", static: false, private: false, access: { has: function (obj) { return "orderDetails" in obj; }, get: function (obj) { return obj.orderDetails; }, set: function (obj, value) { obj.orderDetails = value; } }, metadata: _metadata }, _orderDetails_initializers, _orderDetails_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.OrdersDto = OrdersDto;
