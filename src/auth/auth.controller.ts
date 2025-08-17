import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { LoginUserDto } from 'src/users/dto/users.dto';
import { ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth(){
    return this.authService.getAuth();
  }



  @Post('signup')
     signUp(@Body()  user: CreateUserDto){
   return this.authService.signUp(user);
 }

@ApiBearerAuth('JWT-auth')
@Post('signin')
  
  signIn(@Body() loginUserDto: LoginUserDto) {
    return this.authService.signIn(loginUserDto.email, loginUserDto.password);
  }
 

}
