import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(dto: {
        email: string;
        password: string;
    }): Promise<void>;
}
