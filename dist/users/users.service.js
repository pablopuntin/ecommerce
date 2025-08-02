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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
let UserService = class UserService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getPaginatedUsers(page, limit) {
        return this.usersRepository.getPaginatedUsers(page, limit);
    }
    getUserById(id) {
        return this.usersRepository.getUserById(id);
    }
    getCredential(email, password) {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        return this.usersRepository.getCredential(email, password);
    }
    createUser(data) {
        return this.usersRepository.createUser(data);
    }
    updateUserById(id, data) {
        return this.usersRepository.updateUserById(id, data);
    }
    deleteUserById(id) {
        return this.usersRepository.deleteUserById(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UserService);
//# sourceMappingURL=users.service.js.map