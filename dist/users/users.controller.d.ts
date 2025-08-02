import { UserService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page: number, limit: number): Promise<{
        total: number;
        page: number;
        limit: number;
        data: {
            id: number;
            email: string;
            name: string;
            password: string;
            address: string;
            phone: string;
            country: string;
            city: string;
        }[];
    }>;
    getCredential(email: string, name: string): Promise<{
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }>;
    getUserById(id: string): Promise<{
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    } | null>;
    getCofee(): string;
    createUser(data: any): Promise<any>;
    updateUserById(data: any, id: string): Promise<any>;
    deleteUsersById(id: string): Promise<boolean>;
}
