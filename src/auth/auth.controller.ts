import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @Post('signin')
 signIn(@Body() LoginUserDto: { email: string; password: string }) {
   return this.authService.signIn(LoginUserDto.email, LoginUserDto.password);
 }



}
