export declare class UsersRepository {
    private users;
    getPaginatedUsers(page: number, limit: number): Promise<{
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
    getUserById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    } | null>;
    deleteUserById(id: number): Promise<boolean>;
    createUser(data: any): Promise<any>;
    updateUserById(id: number, data: any): Promise<any>;
    getCofee(): Promise<string>;
}
