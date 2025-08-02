import { CreateUserDto } from './create-user.dto';
declare const UpdateusertDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateusertDto extends UpdateusertDto_base {
    country?: string;
    city?: string;
}
export {};
