
// import { Injectable, BadRequestException } from '@nestjs/common';
// import { UsersRepository } from 'src/users/users.repository';


// @Injectable()
// export class AuthService {
//   constructor(private readonly usersRepository: UsersRepository) {}
    
// async signIn(email: string, password: string) {
//     if (!email || !password) {
//       throw new BadRequestException('Email and password are required');
//     }

//     //const user = await this.usersRepository.getCredential(email, password);
    

//     // Here you would typically generate a JWT token or session
//     //return { message: 'User signed in successfully', user };
//  } 
// }

//codigo chatgpt
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
  const user = await this.usersRepository.getUserByEmail(email);
  if (!user) {
    throw new UnauthorizedException('Email o contraseña inválidos');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new UnauthorizedException('Email o contraseña inválidos');
  }

  const payload = { email: user.email, sub: user.id };
  const token = this.jwtService.sign(payload);

  console.log('Token generado:', token);  // <-- para debug

  return {
    access_token: token,
  };
}
}