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
exports.UsersController = void 0;
var openapi = require("@nestjs/swagger");
var roles_enum_1 = require("./../auth/roles.enum");
var common_1 = require("@nestjs/common");
var auth_guard_1 = require("../../../../../../../../../../src/auth/guard/auth.guard");
var common_2 = require("@nestjs/common");
var roles_decorator_1 = require("../../../../../../../../../../src/decorators/roles.decorator");
var roles_guard_1 = require("../../../../../../../../../../src/auth/guard/roles.guard");
var swagger_1 = require("@nestjs/swagger");
var UsersController = function () {
    var _classDecorators = [(0, common_1.Controller)('users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getUsers_decorators;
    var _getUserById_decorators;
    var _updateUser_decorators;
    var _deleteUser_decorators;
    var UsersController = _classThis = /** @class */ (function () {
        function UsersController_1(userService) {
            this.userService = (__runInitializers(this, _instanceExtraInitializers), userService);
        }
        UsersController_1.prototype.getUsers = function (page, limit) {
            if (page && limit)
                return this.userService.getUsers(Number(page), Number(limit));
            return this.userService.getUsers(1, 5);
        };
        UsersController_1.prototype.getUserById = function (id) {
            return this.userService.getUserById((id));
        };
        UsersController_1.prototype.updateUser = function (id, user) {
            return this.userService.updateUser(id, user);
        };
        UsersController_1.prototype.deleteUser = function (id, req) {
            return this.userService.deleteUser(id, req.user);
        };
        return UsersController_1;
    }());
    __setFunctionName(_classThis, "UsersController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getUsers_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.Get)(), (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin), (0, common_2.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard), (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Número de página', type: Number }), (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Elementos por página', type: Number }), openapi.ApiResponse({ status: 200 })];
        _getUserById_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.Get)(':id'), (0, common_2.UseGuards)(auth_guard_1.AuthGuard), openapi.ApiResponse({ status: 200 })];
        _updateUser_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.Put)(':id'), (0, common_2.UseGuards)(auth_guard_1.AuthGuard), openapi.ApiResponse({ status: 200 })];
        _deleteUser_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.Delete)(':id'), (0, common_2.UseGuards)(auth_guard_1.AuthGuard), openapi.ApiResponse({ status: 200 })];
        __esDecorate(_classThis, null, _getUsers_decorators, { kind: "method", name: "getUsers", static: false, private: false, access: { has: function (obj) { return "getUsers" in obj; }, get: function (obj) { return obj.getUsers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUserById_decorators, { kind: "method", name: "getUserById", static: false, private: false, access: { has: function (obj) { return "getUserById" in obj; }, get: function (obj) { return obj.getUserById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: function (obj) { return "updateUser" in obj; }, get: function (obj) { return obj.updateUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteUser_decorators, { kind: "method", name: "deleteUser", static: false, private: false, access: { has: function (obj) { return "deleteUser" in obj; }, get: function (obj) { return obj.deleteUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersController = _classThis;
}();
exports.UsersController = UsersController;
