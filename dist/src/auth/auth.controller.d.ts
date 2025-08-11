import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(user: CreateUserDto): Promise<{
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
    signIn(LoginUserDto: {
        email: string;
        password: string;
    }): Promise<string>;
}
