import { CanActivate, Injectable, UnauthorizedException } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from '@nestjs/jwt';
import { Role } from "../roles.enum";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor (
        private readonly jwtService: JwtService){}
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
         const token = request.headers.authorization?.split(' ')[1];
         console.log(token)
        if(!token){
            throw new UnauthorizedException('No se ha enviado un token')
        }
        try{
            const secret = process.env.JWT_SECRET;
            const payload = this.jwtService.verify(token, {secret});
            
             payload.exp = new Date(payload.exp * 1000);
          
            payload.roles= payload.isAdmin? [Role.Admin]: [Role.User]; 

            request.user = payload
            console.log(request.user);
            
            return true;
        }catch(error){
            throw new UnauthorizedException('error al validar el token')
        }
    
        }
}