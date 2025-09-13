import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { Role } from "src/auth/roles.enum";
import { CreateUserDto } from "./dto/users.dto";
export declare class UsersRepository {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getUsers(page: number, limit: number): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("../orders/entities/order.entity").Order[];
    }[]>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("../orders/entities/order.entity").Order[];
    }>;
    addUser(user: Partial<User>): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("../orders/entities/order.entity").Order[];
    }>;
    updateUser(id: string, user: Partial<User>): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("../orders/entities/order.entity").Order[];
    }>;
    deleteUser(id: string, currentUser: {
        id: string;
        role: Role;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("../orders/entities/order.entity").Order[];
    }>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(user: CreateUserDto): Promise<{
        password: string;
        name: string;
        email: string;
        confirmPassword: string;
        address: string;
        phone: number;
        country: string;
        city: string;
        isAdmin?: boolean;
    } & User>;
}
