import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UsersRepository{
  constructor (
    @InjectRepository(User) private usersRepository: Repository<User>,
  ){}


  async getUsers (page: number, limit: number){
  //Parseo page y limit porque llegan com string del front
  const pageNumber = Number(page) || 1;
  const limitNumber = Number(limit) || 10;

    const skip = (pageNumber-1)* limitNumber;
    const users = await this.usersRepository.find({
      //take y skip son propiedades de BD 
      take: limitNumber,
      skip: skip,
    });
    return users.map(({password, ...userNoPassword})=> userNoPassword);
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

  async addUser(user: User){
    const newUser = await this.usersRepository.save(user);
    const {password, ...userNoPassword} = newUser;
    return userNoPassword
  }

  async updateUser(id: string, user: Partial<User>){
    await this.usersRepository.update(id, user);
    const updatedUser = await this.usersRepository.findOneBy({id});
    if (!updatedUser) 
      throw new Error (`No existe usuario con id ${id}`);
    const {password, ...userNoPassword} = updatedUser;
    return userNoPassword;
  }

  async deleteUser(id: string){
    const user = await this.usersRepository.findOneBy({id});
    if (!user) throw new Error (`No existe usuario con id ${id}`);
    this.usersRepository.remove(user);
    const {password, ...userNoPassword} = user;
    return userNoPassword;
  }

  async getUserByEmail(email: string){
    return await this.usersRepository.findOneBy({email});
  }

}