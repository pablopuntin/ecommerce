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
exports.LoginUserDto = exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const matchPassword_decorators_1 = require("../../decorators/matchPassword.decorators");
const class_transformer_1 = require("class-transformer");
class CreateUserDto {
    name;
    email;
    password;
    confirmPassword;
    address;
    phone;
    country;
    city;
    isAdmin;
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, description: "debe ser un string de entre 3 y 50 caracteres", example: "test user 01", minLength: 3, maxLength: 50 }, email: { required: true, type: () => String, description: "debe ser un email con un maximo de 50 caracteres", example: "testuser01@mail.com", maxLength: 50, format: "email" }, password: { required: true, type: () => String, description: "debe ser un string de entre 8 y 70 caracteres\ndebe tener una minuscula, una mayuscula, un simbolo especial y un numero", example: "testUser-01", minLength: 8, maxLength: 70 }, confirmPassword: { required: true, type: () => String, description: "debe ser un string de entre 8 y 70 caracteres\ndebe tener una minuscula, una mayuscula, un simbolo especial y un numero", example: "testUser-01" }, address: { required: true, type: () => String, description: "debe ser un string de entre 3 y 80 caracteres", example: "test Calle 01", minLength: 3, maxLength: 80 }, phone: { required: true, type: () => Number, description: "debe ser un numero", example: "0123456789" }, country: { required: true, type: () => String, description: "debe tener entre 5 y 20 caracteres", example: "test Country", minLength: 5, maxLength: 20 }, city: { required: true, type: () => String, description: "debe tener entre 5 y 20 caracteres", example: "test City", minLength: 5, maxLength: 20 } };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(70),
    (0, class_validator_1.IsStrongPassword)({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: `La contraseña debe contener al menos:
    - 1 letra minúscula
    - 1 letra mayúscula
    - 1 número
    - 1 símbolo`
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(matchPassword_decorators_1.MatchPassword, ['password']),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isAdmin", void 0);
class LoginUserDto {
    email;
    password;
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, description: "debe ser un email con un maximo de 50 caracteres", example: "testuser01@mail.com", maxLength: 50, format: "email" }, password: { required: true, type: () => String, description: "debe ser un string de entre 8 y 70 caracteres\ndebe tener una minuscula, una mayuscula, un simbolo especial y un numero", example: "testUser-01" } };
    }
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: `La contraseña debe contener al menos:
      - 1 letra minúscula
      - 1 letra mayúscula
      - 1 número
      - 1 símbolo`
    }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
//# sourceMappingURL=users.dto.js.map