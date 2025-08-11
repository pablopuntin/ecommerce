// src/auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "src/users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
    
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if(!authHeader || !authHeader.startsWith('Basic ')) {
      return false;
    }

    // Aquí se decodifican las credenciales
        const base64Credentials = authHeader.replace('Basic ', '');
        const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString();
        const [email, password] = decodedCredentials.split(':');

        if (!email || !password) {
            throw new UnauthorizedException('Formato de credenciales inválido.');
        }

        try {
            // Ahora, 'email' y 'password' están definidos y se pueden usar
            const user = await this.userService.getUserByEmail(email, password);

            if (!user) {
                throw new UnauthorizedException();
            }

            request.user = user;
            return true;
        } catch (error) {
            throw new UnauthorizedException('Credenciales inválidas');
        }
    }
} 