import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository) {}
 
 // 🔹 GET /users
  getUsers(page: number, limit: number) {
    return this.usersRepository.getUsers(page, limit);
  }
 
 
  // 🔹 GET /users/:id
  getUserById(id: string) {
    return this.usersRepository.getUserById(id);
}

// 🔹 GET /users/credential
getUserByEmail(email: string, password: string) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    return this.usersRepository.getUserByEmail(email);
  }

  
  // 🔹 POST /users
  addUser(data) {
    return this.usersRepository.addUser(data);
  }

  // 🔹 PUT /users/:id
  updateUser(id: string, data) {
    return this.usersRepository.updateUser(id, data);     

}
 
  // 🔹 DELETE /users/:id
  deleteUser(id: string) {
    return this.usersRepository.deleteUser(id);
  } 




}