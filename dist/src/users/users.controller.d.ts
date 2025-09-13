import { UserService } from './users.service';
import { UpdateusertDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/users.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: string, limit?: string): Promise<{
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
    deleteUser(id: string, req: any): Promise<{
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
    create(user: CreateUserDto): Promise<{
        password: string;
        name: string;
        email: string;
        confirmPassword: string;
        address: string;
        phone: number;
        country: string;
        city: string;
        isAdmin?: boolean;
    } & import("./entities/user.entity").User>;
}
