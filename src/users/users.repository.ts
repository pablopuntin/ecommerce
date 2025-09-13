
import { Injectable, NotFoundException,BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { Role } from "src/auth/roles.enum";
import { CreateUserDto } from "./dto/users.dto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersRepository{
  constructor (
    @InjectRepository(User) private usersRepository: Repository<User>,
  ){}

  async getUsers (page: number, limit: number){
  //Parseo page y limit porque llegan com string del front
    const skip = (page-1)* limit;
    const users = await this.usersRepository.find({

      take: limit,
      skip: skip,
    });
    return users.map(({password, isAdmin, ...filteredUserData})=> filteredUserData);
  }

  async getUserById(id: string){

    const user = await this.usersRepository.findOne({
      where:{id},
      relations:{
        orders: true,
      },
    });

    if(!user) 
      throw new NotFoundException(`No se encontró el usuario con id ${id}`);

    const {password, ...userNoPassword} = user;
    return userNoPassword
  }

 
  
  async addUser (user: Partial<User>){
       const newUser = await this.usersRepository.save(user);
       //buscamos el user sin el confirmPassword
       const dbUser= await this.usersRepository.findOneBy({
        id: newUser.id
       })
   
    if(!dbUser) throw new Error(`No se encontro el usuario con id: ${newUser.id}`);
    const {password, ...userNoPassword}= dbUser;
    return userNoPassword;
  }


  async updateUser(id: string, user: Partial<User>){
    await this.usersRepository.update(id, user);
    const updatedUser = await this.usersRepository.findOneBy({id});
    if (!updatedUser) 
      throw new Error (`No existe usuario con id ${id}`);
    const {password, ...userNoPassword} = updatedUser;
    return userNoPassword;
  }

  async deleteUser(id: string, currentUser: { id: string; role: Role }){
    const user = await this.usersRepository.findOneBy({id});
    if (!user) throw new Error (`No existe usuario con id ${id}`);

     if (currentUser.id !== id && currentUser.role !== Role.Admin) {
     throw new Error('No tienes permisos para borrar este usuario');
   }

    await this.usersRepository.remove(user);
    const {password, ...userNoPassword} = user;
    return userNoPassword;
  }

   async getUserByEmail(email: string){
     return await this.usersRepository.findOneBy({email});
   }

   //metodos nuevos

   async createUser(user:CreateUserDto){
    const existUser = await this.usersRepository.findOneBy({
      email: user.email
    })
    if(existUser) throw new Error(`ya exisite un usuario con el email: ${user.email}`);
    
    const hashedPassword = await bcrypt.hash(user.password, 8)
            if (!hashedPassword)  throw new BadRequestException('no se pudo Hashear el password');
        
    return  await this.usersRepository.save({
          ...user,
          password: hashedPassword
        })

   }

     }

