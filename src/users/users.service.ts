import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository) {}
 
 // 🔹 GET /products
  getPaginatedUsers(page: number, limit: number) {
    return this.usersRepository.getPaginatedUsers(page, limit);
  }
 
 
  // 🔹 GET /users/:id
  getUserById(id: number) {
    return this.usersRepository.getUserById(id);

}
  // 🔹 POST /users
  createUser(data) {
    return this.usersRepository.createUser(data);
  }

  // 🔹 PUT /users/:id
  updateUserById(id: number, data) {
    return this.usersRepository.updateUserById(id, data);     

}
 
  // 🔹 DELETE /users/:id
  deleteUserById(id: number) {
    return this.usersRepository.deleteUserById(id);
  } 




}