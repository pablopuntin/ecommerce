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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var categories_entity_1 = require("../../categories/entities/categories.entity");
var orderDetails_entity_1 = require("../../order-details/entities/orderDetails.entity");
var Product = function () {
    var _classDecorators = [(0, typeorm_1.Entity)({ name: 'products'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _stock_decorators;
    var _stock_initializers = [];
    var _stock_extraInitializers = [];
    var _imgURL_decorators;
    var _imgURL_initializers = [];
    var _imgURL_extraInitializers = [];
    var _categories_decorators;
    var _categories_initializers = [];
    var _categories_extraInitializers = [];
    var _orderDetails_decorators;
    var _orderDetails_initializers = [];
    var _orderDetails_extraInitializers = [];
    var Product = _classThis = /** @class */ (function () {
        function Product_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.price = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.stock = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _stock_initializers, void 0));
            this.imgURL = (__runInitializers(this, _stock_extraInitializers), __runInitializers(this, _imgURL_initializers, void 0));
            this.categories = (__runInitializers(this, _imgURL_extraInitializers), __runInitializers(this, _categories_initializers, void 0));
            //relaacion N:N con orderDetails
            this.orderDetails = (__runInitializers(this, _categories_extraInitializers), __runInitializers(this, _orderDetails_initializers, void 0));
            __runInitializers(this, _orderDetails_extraInitializers);
        }
        Product_1._OPENAPI_METADATA_FACTORY = function () {
            return { id: { required: true, type: function () { return String; } }, name: { required: true, type: function () { return String; } }, description: { required: true, type: function () { return String; } }, price: { required: true, type: function () { return Number; } }, stock: { required: true, type: function () { return Number; } }, imgURL: { required: true, type: function () { return String; } }, categories: { required: true, type: function () { return require("../../categories/entities/categories.entity").Categories; } }, orderDetails: { required: true, type: function () { return [require("../../order-details/entities/orderDetails.entity").OrderDetail]; } } };
        };
        return Product_1;
    }());
    __setFunctionName(_classThis, "Product");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 50 })];
        _description_decorators = [(0, typeorm_1.Column)({ type: 'text' })];
        _price_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 })];
        _stock_decorators = [(0, typeorm_1.Column)()];
        _imgURL_decorators = [(0, typeorm_1.Column)({ type: 'text',
                default: 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg' })];
        _categories_decorators = [(0, typeorm_1.ManyToOne)(function () { return categories_entity_1.Categories; }, function (categories) { return categories.products; }), (0, typeorm_1.JoinColumn)({ name: 'category_id' })];
        _orderDetails_decorators = [(0, typeorm_1.ManyToMany)(function () { return orderDetails_entity_1.OrderDetail; }, function (orderDetails) { return orderDetails.products; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _stock_decorators, { kind: "field", name: "stock", static: false, private: false, access: { has: function (obj) { return "stock" in obj; }, get: function (obj) { return obj.stock; }, set: function (obj, value) { obj.stock = value; } }, metadata: _metadata }, _stock_initializers, _stock_extraInitializers);
        __esDecorate(null, null, _imgURL_decorators, { kind: "field", name: "imgURL", static: false, private: false, access: { has: function (obj) { return "imgURL" in obj; }, get: function (obj) { return obj.imgURL; }, set: function (obj, value) { obj.imgURL = value; } }, metadata: _metadata }, _imgURL_initializers, _imgURL_extraInitializers);
        __esDecorate(null, null, _categories_decorators, { kind: "field", name: "categories", static: false, private: false, access: { has: function (obj) { return "categories" in obj; }, get: function (obj) { return obj.categories; }, set: function (obj, value) { obj.categories = value; } }, metadata: _metadata }, _categories_initializers, _categories_extraInitializers);
        __esDecorate(null, null, _orderDetails_decorators, { kind: "field", name: "orderDetails", static: false, private: false, access: { has: function (obj) { return "orderDetails" in obj; }, get: function (obj) { return obj.orderDetails; }, set: function (obj, value) { obj.orderDetails = value; } }, metadata: _metadata }, _orderDetails_initializers, _orderDetails_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Product = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Product = _classThis;
}();
exports.Product = Product;
