import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
