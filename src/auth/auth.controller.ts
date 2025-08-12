import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/users.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth(){
    return this.authService.getAuth();
  }

//Registro

  @Post('signup')
 signUp(@Body()  user: CreateUserDto){
   return this.authService.signUp(user);
 }

 //Login
 @Post('signin')
 signIn(@Body() LoginUserDto: { email: string; password: string }) {
   return this.authService.signIn(LoginUserDto.email, LoginUserDto.password);
 }
 

}
