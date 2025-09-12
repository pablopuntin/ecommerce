"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.UpdateusertDto = void 0;
var openapi = require("@nestjs/swagger");
var mapped_types_1 = require("@nestjs/mapped-types");
var users_dto_1 = require("./users.dto");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var UpdateusertDto = function () {
    var _a;
    var _classSuper = (0, mapped_types_1.PartialType)(users_dto_1.CreateUserDto);
    var _country_decorators;
    var _country_initializers = [];
    var _country_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _isAdmin_decorators;
    var _isAdmin_initializers = [];
    var _isAdmin_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(UpdateusertDto, _super);
            function UpdateusertDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.country = __runInitializers(_this, _country_initializers, void 0);
                _this.city = (__runInitializers(_this, _country_extraInitializers), __runInitializers(_this, _city_initializers, void 0));
                _this.name = (__runInitializers(_this, _city_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
                _this.email = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
                _this.password = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _password_initializers, void 0));
                _this.phone = (__runInitializers(_this, _password_extraInitializers), __runInitializers(_this, _phone_initializers, void 0));
                _this.isAdmin = (__runInitializers(_this, _phone_extraInitializers), __runInitializers(_this, _isAdmin_initializers, void 0));
                __runInitializers(_this, _isAdmin_extraInitializers);
                return _this;
            }
            UpdateusertDto._OPENAPI_METADATA_FACTORY = function () {
                return { country: { required: true, type: function () { return String; } }, city: { required: true, type: function () { return String; } }, name: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } }, password: { required: true, type: function () { return String; }, minLength: 8, maxLength: 70 }, phone: { required: true, type: function () { return Number; } } };
            };
            return UpdateusertDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _country_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _city_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _name_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _email_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _password_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MinLength)(8), (0, class_validator_1.MaxLength)(70), (0, class_validator_1.IsStrongPassword)({
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                }, {
                    message: "La contrase\u00F1a debe contener al menos:\n     - 1 letra min\u00FAscula\n     - 1 letra may\u00FAscula\n     - 1 n\u00FAmero\n     - 1 s\u00EDmbolo"
                })];
            _phone_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _isAdmin_decorators = [(0, swagger_1.ApiHideProperty)(), (0, class_validator_1.IsEmpty)()];
            __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _isAdmin_decorators, { kind: "field", name: "isAdmin", static: false, private: false, access: { has: function (obj) { return "isAdmin" in obj; }, get: function (obj) { return obj.isAdmin; }, set: function (obj, value) { obj.isAdmin = value; } }, metadata: _metadata }, _isAdmin_initializers, _isAdmin_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateusertDto = UpdateusertDto;
