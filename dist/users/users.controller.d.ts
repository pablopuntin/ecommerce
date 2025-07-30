import { UserService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): string;
}
