"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
var auth_guard_1 = require("../../../../../../../../../../src/auth/guard/auth.guard");
var roles_enum_1 = require("../../../../../../../../../../src/auth/roles.enum");
var roles_decorator_1 = require("../../../../../../../../../../src/decorators/roles.decorator");
var roles_guard_1 = require("../../../../../../../../../../src/auth/guard/roles.guard");
var swagger_1 = require("@nestjs/swagger");
var update_product_dto_1 = require("./dto/update-product.dto");
var ProductsController = function () {
    var _classDecorators = [(0, common_2.Controller)('products')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getProducts_decorators;
    var _addProducts_decorators;
    var _getProductById_decorators;
    var _updateProduct_decorators;
    var ProductsController = _classThis = /** @class */ (function () {
        function ProductsController_1(productService) {
            this.productService = (__runInitializers(this, _instanceExtraInitializers), productService);
        }
        ProductsController_1.prototype.getProducts = function (page, limit) {
            if (page && limit)
                return this.productService.getProducts(Number(page), Number(limit));
            return this.productService.getProducts(Number(1), Number(5));
        };
        ProductsController_1.prototype.addProducts = function () {
            return this.productService.addProducts();
        };
        ProductsController_1.prototype.getProductById = function (id) {
            return this.productService.getProductById(id);
        };
        ProductsController_1.prototype.updateProduct = function (id, product) {
            return this.productService.updateProduct(id, product);
        };
        return ProductsController_1;
    }());
    __setFunctionName(_classThis, "ProductsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getProducts_decorators = [(0, common_1.Get)(), openapi.ApiResponse({ status: 200, type: [require("./entities/product.entity").Product] })];
        _addProducts_decorators = [(0, common_1.Get)('seeder'), openapi.ApiResponse({ status: 200, type: String })];
        _getProductById_decorators = [(0, common_1.Get)(':id'), openapi.ApiResponse({ status: 200, type: Object })];
        _updateProduct_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({ type: update_product_dto_1.UpdateProductDto }), (0, common_1.Put)(':id'), (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin), (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard), openapi.ApiResponse({ status: 200, type: require("./entities/product.entity").Product })];
        __esDecorate(_classThis, null, _getProducts_decorators, { kind: "method", name: "getProducts", static: false, private: false, access: { has: function (obj) { return "getProducts" in obj; }, get: function (obj) { return obj.getProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addProducts_decorators, { kind: "method", name: "addProducts", static: false, private: false, access: { has: function (obj) { return "addProducts" in obj; }, get: function (obj) { return obj.addProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getProductById_decorators, { kind: "method", name: "getProductById", static: false, private: false, access: { has: function (obj) { return "getProductById" in obj; }, get: function (obj) { return obj.getProductById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateProduct_decorators, { kind: "method", name: "updateProduct", static: false, private: false, access: { has: function (obj) { return "updateProduct" in obj; }, get: function (obj) { return obj.updateProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductsController = _classThis;
}();
exports.ProductsController = ProductsController;
