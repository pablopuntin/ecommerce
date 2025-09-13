import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { Role } from 'src/auth/roles.enum';
import { UpdateusertDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository) {}
 

  getUsers(page: number, limit: number) {
    return this.usersRepository.getUsers(page, limit);
  }
 
 
  
  getUserById(id: string) {
    if(!id){
    throw new NotFoundException (`Usuario con id ${id} no encontrado`)
}
return this.usersRepository.getUserById(id)
  }



  updateUser(id: string, user: UpdateusertDto) {
    return this.usersRepository.updateUser(id, user);     
}
 
  
 async deleteUser( id: string, currentUser:{id:string; role:Role} ) {
    if(!id){
    throw new NotFoundException (`Usuario con id ${id} no encontrado`)
}
    return this.usersRepository.deleteUser(id, currentUser);
  }

  //metodos nuevos

  async createUser(user){
    
    return await this.usersRepository.createUser(user);
  }

}