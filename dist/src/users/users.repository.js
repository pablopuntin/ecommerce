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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const roles_enum_1 = require("../auth/roles.enum");
const bcrypt = require("bcrypt");
let UsersRepository = class UsersRepository {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers(page, limit) {
        const skip = (page - 1) * limit;
        const users = await this.usersRepository.find({
            take: limit,
            skip: skip,
        });
        return users.map(({ password, isAdmin, ...filteredUserData }) => filteredUserData);
    }
    async getUserById(id) {
        const user = await this.usersRepository.findOne({
            where: { id },
            relations: {
                orders: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`No se encontró el usuario con id ${id}`);
        const { password, ...userNoPassword } = user;
        return userNoPassword;
    }
    async addUser(user) {
        const newUser = await this.usersRepository.save(user);
        const dbUser = await this.usersRepository.findOneBy({
            id: newUser.id
        });
        if (!dbUser)
            throw new Error(`No se encontro el usuario con id: ${newUser.id}`);
        const { password, ...userNoPassword } = dbUser;
        return userNoPassword;
    }
    async updateUser(id, user) {
        await this.usersRepository.update(id, user);
        const updatedUser = await this.usersRepository.findOneBy({ id });
        if (!updatedUser)
            throw new Error(`No existe usuario con id ${id}`);
        const { password, ...userNoPassword } = updatedUser;
        return userNoPassword;
    }
    async deleteUser(id, currentUser) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user)
            throw new Error(`No existe usuario con id ${id}`);
        if (currentUser.id !== id && currentUser.role !== roles_enum_1.Role.Admin) {
            throw new Error('No tienes permisos para borrar este usuario');
        }
        await this.usersRepository.remove(user);
        const { password, ...userNoPassword } = user;
        return userNoPassword;
    }
    async getUserByEmail(email) {
        return await this.usersRepository.findOneBy({ email });
    }
    async createUser(user) {
        const existUser = await this.usersRepository.findOneBy({
            email: user.email
        });
        if (existUser)
            throw new Error(`ya exisite un usuario con el email: ${user.email}`);
        const hashedPassword = await bcrypt.hash(user.password, 8);
        if (!hashedPassword)
            throw new common_1.BadRequestException('no se pudo Hashear el password');
        return await this.usersRepository.save({
            ...user,
            password: hashedPassword
        });
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map