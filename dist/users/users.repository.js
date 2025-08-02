"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    users = [
        {
            id: 1,
            email: 'prueba@mail.com',
            name: 'mario',
            password: '12po',
            address: 'calle falsa 123',
            phone: '123456789',
            country: 'Argentina',
            city: 'Buenos Aires',
        },
        {
            id: 2,
            email: 'otro@mail.com',
            name: 'lucia',
            password: 'abcd',
            address: 'otra calle 456',
            phone: '987654321',
            country: 'Argentina',
            city: 'Córdoba',
        }
    ];
    async getPaginatedUsers(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = this.users.slice(start, end);
        return {
            total: this.users.length,
            page,
            limit,
            data: paginated
        };
    }
    async getUserById(id) {
        const user = this.users.find(user => user.id === id);
        if (!user)
            return null;
        const { password, ...safeUser } = user;
        return safeUser;
    }
    async deleteUserById(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    }
    async createUser(data) {
        const newUser = {
            id: this.users.length + 1,
            ...data,
        };
        this.users.push(newUser);
        return newUser;
    }
    async updateUserById(id, data) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return null;
        const updatedUser = {
            ...this.users[index],
            ...data,
        };
        this.users[index] = updatedUser;
        return updatedUser;
    }
    async getCofee() {
        return 'no se hacer cafe, solo te y mate, jaja';
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map