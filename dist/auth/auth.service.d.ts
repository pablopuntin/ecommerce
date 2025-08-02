import { UsersRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    signIn(email: string, password: string): Promise<{
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
