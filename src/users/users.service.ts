import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/users.dto';
import { User } from './entities/user.entity';
import { UpdateusertDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository) {}
 
 // 🔹 GET /users
  getUsers(page: number, limit: number) {
    return this.usersRepository.getUsers(page, limit);
  }
 
 
  // 🔹 GET /users/:id
  
  getUserById(id: string) {
    if(!id){
    throw new NotFoundException (`Usuario con id ${id} no encontrado`)
}
return this.usersRepository.getUserById(id)
  }


  // 🔹 PUT /users/:id
  updateUser(id: string, user: UpdateusertDto) {
    return this.usersRepository.updateUser(id, user);     
}
 
  // 🔹 DELETE /users/:id
  deleteUser(id: string) {
    if(!id){
    throw new NotFoundException (`Usuario con id ${id} no encontrado`)
}
    return this.usersRepository.deleteUser(id);
  } 


}