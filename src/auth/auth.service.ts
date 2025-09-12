
 import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
 import { UsersRepository } from 'src/users/users.repository';
 import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

 @Injectable()
 export class AuthService {
   constructor(private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
   ) {}

   getAuth(){
    return 'Autenticacion'
   }

  
   async signUp(user:Partial<User>){
        const {email, password} = user;
       
        if (!email || !password)
          throw new BadRequestException('se necesita mail y password');
        const foundUser = await this.usersRepository.getUserByEmail(email);
        if (foundUser)   throw new BadRequestException('email ya registrado');

      
        const hashedPassword = await bcrypt.hash(password, 8)
        if (!hashedPassword)  throw new BadRequestException('no se pudo Hashear el password');
        //creamos el usuario en bd
      return  await this.usersRepository.addUser({
          ...user,
          password: hashedPassword
        })
      }


      
 
 async signIn(email: string, password: string) {
     
  const foundUser = await this.usersRepository.getUserByEmail(email);
       if (!foundUser)   throw new BadRequestException('credenciales incorrectas');
       
      
       const validPassword = await bcrypt.compare(password, foundUser.password);
       if (!validPassword)   throw new BadRequestException('credenciales incorrectas');

       //generar token (firmamos token)
       const payLoad = {id: foundUser.id, isAdmin: foundUser.isAdmin}
      const token = this.jwtService.sign(payLoad);
      
      return{
        message: 'usuario logueado',
        token, 
      }
  
    }
  }
  