import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';


@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}



    
async signIn(email: string, password: string) {
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    //const user = await this.usersRepository.getCredential(email, password);
    

    // Here you would typically generate a JWT token or session
    //return { message: 'User signed in successfully', user };
 } 
}