import { UsersRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    signIn(email: string, password: string): Promise<void>;
}
