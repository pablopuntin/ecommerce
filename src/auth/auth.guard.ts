// src/auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, } from "@nestjs/common";


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if(!authHeader || !authHeader.startsWith('basic ')) {
      return false;
    }

    //verificar formato email:password
    const base =authHeader.replace('basic ', '');
    const [email, password] = base.split(':');

    if (!email || !password) {
      return false;     
    }
    return true;

    }
 
}