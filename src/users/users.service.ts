import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository) {}
 
 // 🔹 GET /users
  getPaginatedUsers(page: number, limit: number) {
    return this.usersRepository.getPaginatedUsers(page, limit);
  }
 
 
  // 🔹 GET /users/:id
  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
}

// 🔹 GET /users/credential
getCredential(email: string, password: string) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    return this.usersRepository.getCredential(email, password);
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