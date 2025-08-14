import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";   
import { User } from '../../users/entities/user.entity';
import { Roles } from '../../decorators/roles.decorator';
import { Role } from "../roles.enum";

@Injectable()
export class RolesGuard implements CanActivate{

    constructor (private readonly reflector:Reflector){}
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean>{
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles',[
                context.getHandler(),
                context.getClass(),
        ]);//array roles permitidos

        //convierto el http 
        const request = context.switchToHttp().getRequest();//request.user.roles= [roles permitidos?]
        
        const hasRole= () => requiredRoles.some((role)=> request.user?.roles?.includes(role)); 
        const valid = request.user && request.user.roles && hasRole();

        if(!valid){
            throw new ForbiddenException('No tiene permiso para acceder a esta ruta');
        }

        
    return true;
    }
        

        
    }
    
