import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { LoginUserDto } from 'src/users/dto/users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
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
    signIn(loginUserDto: LoginUserDto): Promise<{
        message: string;
        token: string;
    }>;
}
