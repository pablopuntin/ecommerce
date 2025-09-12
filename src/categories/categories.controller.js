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
exports.CategoriesController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var CategoriesController = function () {
    var _classDecorators = [(0, common_1.Controller)('categories')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getAllCategories_decorators;
    var _addCategories_decorators;
    var CategoriesController = _classThis = /** @class */ (function () {
        function CategoriesController_1(categoriesService) {
            this.categoriesService = (__runInitializers(this, _instanceExtraInitializers), categoriesService);
        }
        CategoriesController_1.prototype.getAllCategories = function () {
            return this.categoriesService.getAllCategories();
        };
        CategoriesController_1.prototype.addCategories = function () {
            return this.categoriesService.addCategories();
        };
        return CategoriesController_1;
    }());
    __setFunctionName(_classThis, "CategoriesController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllCategories_decorators = [(0, common_1.Get)(), openapi.ApiResponse({ status: 200, type: [require("./entities/categories.entity").Categories] })];
        _addCategories_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.Get)('seeder'), openapi.ApiResponse({ status: 200, type: String })];
        __esDecorate(_classThis, null, _getAllCategories_decorators, { kind: "method", name: "getAllCategories", static: false, private: false, access: { has: function (obj) { return "getAllCategories" in obj; }, get: function (obj) { return obj.getAllCategories; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addCategories_decorators, { kind: "method", name: "addCategories", static: false, private: false, access: { has: function (obj) { return "addCategories" in obj; }, get: function (obj) { return obj.addCategories; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CategoriesController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CategoriesController = _classThis;
}();
exports.CategoriesController = CategoriesController;
