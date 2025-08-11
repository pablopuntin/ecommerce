import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getAuth(): string;
    signUp(user: Partial<User>): Promise<{
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
    signIn(email: string, password: string): Promise<string>;
}
