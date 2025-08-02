import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(dto: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            name: string;
            address: string;
            phone: string;
            country: string;
            city: string;
        };
    }>;
}
