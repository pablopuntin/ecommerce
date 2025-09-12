import { UsersRepository } from './users.repository';
import { Role } from 'src/auth/roles.enum';
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
}
