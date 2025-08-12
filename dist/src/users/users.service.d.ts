import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { UpdateusertDto } from './dto/update-user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
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
    getUserByEmail(email: string, password: string): Promise<User | null>;
    updateUser(id: string, user: UpdateusertDto): Promise<{
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
    deleteUser(id: string): Promise<{
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
}
