import { CreateUserDto } from './users.dto';
declare const UpdateusertDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateusertDto extends UpdateusertDto_base {
    country: string;
    city: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    isAdmin: boolean;
}
export {};
