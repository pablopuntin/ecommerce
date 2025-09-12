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
exports.LoginUserDto = exports.CreateUserDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var matchPassword_decorators_1 = require("../../../../../../../../../../../src/decorators/matchPassword.decorators");
var class_transformer_1 = require("class-transformer");
var CreateUserDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _confirmPassword_decorators;
    var _confirmPassword_initializers = [];
    var _confirmPassword_extraInitializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _country_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _isAdmin_decorators;
    var _isAdmin_initializers = [];
    var _isAdmin_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateUserDto() {
                /**
                 * debe ser un string de entre 3 y 50 caracteres
                 * @example 'test user 01'
                 */
                this.name = __runInitializers(this, _name_initializers, void 0);
                /**
                 * debe ser un email con un maximo de 50 caracteres
                 * @example 'testuser01@mail.com'
                 */
                this.email = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                /**
                 * debe ser un string de entre 8 y 70 caracteres
                 * debe tener una minuscula, una mayuscula, un simbolo especial y un numero
                 * @example 'testUser-01'
                 */
                this.password = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _password_initializers, void 0));
                /**
                 * debe ser un string de entre 8 y 70 caracteres
                 * debe tener una minuscula, una mayuscula, un simbolo especial y un numero
                 * @example 'testUser-01'
                 */
                this.confirmPassword = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _confirmPassword_initializers, void 0));
                /**
               * debe ser un string de entre 3 y 80 caracteres
                * @example 'test Calle 01'
               */
                this.address = (__runInitializers(this, _confirmPassword_extraInitializers), __runInitializers(this, _address_initializers, void 0));
                /**
               * debe ser un numero
                * @example 0123456789
               */
                this.phone = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
                /**
               * debe tener entre 5 y 20 caracteres
                * @example 'test Country'
               */
                this.country = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _country_initializers, void 0));
                /**
           * debe tener entre 5 y 20 caracteres
            * @example 'test City'
           */
                this.city = (__runInitializers(this, _country_extraInitializers), __runInitializers(this, _city_initializers, void 0));
                this.isAdmin = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _isAdmin_initializers, void 0));
                __runInitializers(this, _isAdmin_extraInitializers);
            }
            CreateUserDto._OPENAPI_METADATA_FACTORY = function () {
                return { name: { required: true, type: function () { return String; }, description: "debe ser un string de entre 3 y 50 caracteres", example: "test user 01", minLength: 3, maxLength: 50 }, email: { required: true, type: function () { return String; }, description: "debe ser un email con un maximo de 50 caracteres", example: "testuser01@mail.com", maxLength: 50, format: "email" }, password: { required: true, type: function () { return String; }, description: "debe ser un string de entre 8 y 70 caracteres\ndebe tener una minuscula, una mayuscula, un simbolo especial y un numero", example: "testUser-01", minLength: 8, maxLength: 70 }, confirmPassword: { required: true, type: function () { return String; }, description: "debe ser un string de entre 8 y 70 caracteres\ndebe tener una minuscula, una mayuscula, un simbolo especial y un numero", example: "testUser-01" }, address: { required: true, type: function () { return String; }, description: "debe ser un string de entre 3 y 80 caracteres", example: "test Calle 01", minLength: 3, maxLength: 80 }, phone: { required: true, type: function () { return Number; }, description: "debe ser un numero", example: "0123456789" }, country: { required: true, type: function () { return String; }, description: "debe tener entre 5 y 20 caracteres", example: "test Country", minLength: 5, maxLength: 20 }, city: { required: true, type: function () { return String; }, description: "debe tener entre 5 y 20 caracteres", example: "test City", minLength: 5, maxLength: 20 } };
            };
            return CreateUserDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MinLength)(3), (0, class_validator_1.MaxLength)(50)];
            _email_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.MaxLength)(50)];
            _password_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MinLength)(8), (0, class_validator_1.MaxLength)(70), (0, class_validator_1.IsStrongPassword)({
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                }, {
                    message: "La contrase\u00F1a debe contener al menos:\n    - 1 letra min\u00FAscula\n    - 1 letra may\u00FAscula\n    - 1 n\u00FAmero\n    - 1 s\u00EDmbolo"
                })];
            _confirmPassword_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Validate)(matchPassword_decorators_1.MatchPassword, ['password'])];
            _address_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MinLength)(3), (0, class_validator_1.MaxLength)(80)];
            _phone_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsNumber)(), (0, class_transformer_1.Type)(function () { return Number; })];
            _country_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MinLength)(5), (0, class_validator_1.MaxLength)(20)];
            _city_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.MinLength)(5), (0, class_validator_1.MaxLength)(20)];
            _isAdmin_decorators = [(0, swagger_1.ApiHideProperty)(), (0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            __esDecorate(null, null, _confirmPassword_decorators, { kind: "field", name: "confirmPassword", static: false, private: false, access: { has: function (obj) { return "confirmPassword" in obj; }, get: function (obj) { return obj.confirmPassword; }, set: function (obj, value) { obj.confirmPassword = value; } }, metadata: _metadata }, _confirmPassword_initializers, _confirmPassword_extraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
            __esDecorate(null, null, _isAdmin_decorators, { kind: "field", name: "isAdmin", static: false, private: false, access: { has: function (obj) { return "isAdmin" in obj; }, get: function (obj) { return obj.isAdmin; }, set: function (obj, value) { obj.isAdmin = value; } }, metadata: _metadata }, _isAdmin_initializers, _isAdmin_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateUserDto = CreateUserDto;
var LoginUserDto = function () {
    var _a;
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    return _a = /** @class */ (function () {
            function LoginUserDto() {
                /**
                 * debe ser un email con un maximo de 50 caracteres
                 * @example 'testuser01@mail.com'
                 */
                this.email = __runInitializers(this, _email_initializers, void 0);
                /**
             * debe ser un string de entre 8 y 70 caracteres
             * debe tener una minuscula, una mayuscula, un simbolo especial y un numero
             * @example 'testUser-01'
             */
                this.password = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _password_initializers, void 0));
                __runInitializers(this, _password_extraInitializers);
            }
            LoginUserDto._OPENAPI_METADATA_FACTORY = function () {
                return { email: { required: true, type: function () { return String; }, description: "debe ser un email con un maximo de 50 caracteres", example: "testuser01@mail.com", maxLength: 50, format: "email" }, password: { required: true, type: function () { return String; }, description: "debe ser un string de entre 8 y 70 caracteres\ndebe tener una minuscula, una mayuscula, un simbolo especial y un numero", example: "testUser-01" } };
            };
            return LoginUserDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsEmail)(), (0, class_validator_1.MaxLength)(50)];
            _password_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsStrongPassword)({
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                }, {
                    message: "La contrase\u00F1a debe contener al menos:\n      - 1 letra min\u00FAscula\n      - 1 letra may\u00FAscula\n      - 1 n\u00FAmero\n      - 1 s\u00EDmbolo"
                })];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.LoginUserDto = LoginUserDto;
