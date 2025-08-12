
 import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
 import { UsersRepository } from 'src/users/users.repository';
 import * as bcrypt from 'bcrypt';


 @Injectable()
 export class AuthService {
   constructor(private readonly usersRepository: UsersRepository) {}

   getAuth(){
    return 'Autenticacion'
   }

   //Registro
   async signUp(user:Partial<User>){
        const {email, password} = user;
        //*Verificar que no exista el usuario que se quiere registrar
        if (!email || !password)
          throw new BadRequestException('se necesita mail y password');
        const foundUser = await this.usersRepository.getUserByEmail(email);
        if (foundUser)   throw new BadRequestException('email ya registrado');

        //hashear el password
        const hashedPassword = await bcrypt.hash(password, 8)
        if (!hashedPassword)  throw new BadRequestException('no se pudo Hashear el password');
        //creamos el usuario en bd
      return  await this.usersRepository.addUser({
          ...user,
          password: hashedPassword
        })
      }


      
  //Login
 async signIn(email: string, password: string) {
     if (!email || !password) 
       throw new BadRequestException('Email and password are required');
     
       const user = this.usersRepository.getUserByEmail(email);

       return 'usuario logueado (TOKEN)'
      }
      
      


    }
  