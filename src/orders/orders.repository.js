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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
var common_1 = require("@nestjs/common");
var orderDetails_entity_1 = require("../../../../../../../../../../src/order-details/entities/orderDetails.entity");
var order_entity_1 = require("./entities/order.entity");
var OrdersRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var OrdersRepository = _classThis = /** @class */ (function () {
        function OrdersRepository_1(ordersRepository, orderDetailRepository, usersRepository, productsRepository) {
            this.ordersRepository = ordersRepository;
            this.orderDetailRepository = orderDetailRepository;
            this.usersRepository = usersRepository;
            this.productsRepository = productsRepository;
        }
        OrdersRepository_1.prototype.addOrder = function (userId, products) {
            return __awaiter(this, void 0, void 0, function () {
                var total, user, order, newOrder, productsArray, orderDetail;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            total = 0;
                            return [4 /*yield*/, this.usersRepository.findOneBy({ id: userId })];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                throw new Error("Usuario con id ".concat(userId, " no encontrado"));
                            }
                            order = new order_entity_1.Order();
                            order.date = new Date();
                            order.user = user;
                            return [4 /*yield*/, this.ordersRepository.save(order)];
                        case 2:
                            newOrder = _a.sent();
                            return [4 /*yield*/, Promise.all(products.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                    var product, currentStock, newStock;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.productsRepository.findOneBy({ id: element.id })];
                                            case 1:
                                                product = _a.sent();
                                                if (!product) {
                                                    throw new common_1.NotFoundException("Producto con id ".concat(element.id, " no encontrado"));
                                                }
                                                total += Number(product.price);
                                                currentStock = Number(product.stock);
                                                if (isNaN(currentStock)) {
                                                    throw new Error("Stock inv\u00E1lido para el producto ".concat(product.name));
                                                }
                                                if (currentStock <= 0) {
                                                    throw new Error("Stock insuficiente para el producto ".concat(product.name));
                                                }
                                                newStock = currentStock - 1;
                                                return [4 /*yield*/, this.productsRepository.update({ id: product.id }, { stock: newStock })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/, product];
                                        }
                                    });
                                }); }))];
                        case 3:
                            productsArray = _a.sent();
                            orderDetail = new orderDetails_entity_1.OrderDetail();
                            orderDetail.price = Number(Number(total).toFixed(2));
                            orderDetail.products = productsArray;
                            orderDetail.order = newOrder;
                            return [4 /*yield*/, this.orderDetailRepository.save(orderDetail)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.ordersRepository.find({
                                    where: { id: newOrder.id },
                                    relations: { orderDetails: true },
                                })];
                        case 5: 
                        // Retornamos orden con detalles
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        OrdersRepository_1.prototype.getOrder = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ordersRepository.findOne({
                                where: { id: id },
                                relations: {
                                    orderDetails: {
                                        products: true
                                    },
                                },
                            })];
                        case 1:
                            order = _a.sent();
                            //Validamos que encuentre la roden, de otra forma devuelve undefined y no se debe 
                            if (!order) {
                                throw new ErrorEvent("Orden con id ".concat(id, " no encontrada"));
                            }
                            return [2 /*return*/, order];
                    }
                });
            });
        };
        return OrdersRepository_1;
    }());
    __setFunctionName(_classThis, "OrdersRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrdersRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrdersRepository = _classThis;
}();
exports.OrdersRepository = OrdersRepository;
