import { Controller, Delete, Get, HttpCode, Post, Put, Param, Body,Query, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';  
import { UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/users.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(
     @Query('page') page: number,
        @Query('limit') limit: number 
  ) {
    return this.userService.getUsers(page, limit);
  }

  @UseGuards(AuthGuard)
  @Get('credentials')
  getUserByEmail(
    @Query('email') email: string,
    @Query('password') name: string,
  ) {
    return this.userService.getUserByEmail(email, name);
  }

  //para un id, por ejemplo get/1
  @UseGuards(AuthGuard)
  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string ) {
    return this.userService.getUserById((id));
  }



  //cambiar status a 418(el servidor se rehusa a hacer lo que se le pide)
  @UseGuards(AuthGuard)
  @HttpCode(418)
  @Get('cofee')
  getCofee() {
    return 'no se hacer cafe, solo te y mate, jaja';
    //return this.userService.getCofee();
  }

  @Post()
  @HttpCode(201) // 201 Created
  addUser(@Body()userDto: CreateUserDto) {
    const user= plainToInstance(User, userDto);
   return this.userService.addUser(user);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  updateUser(@Body() user: User, @Param('id', ParseUUIDPipe) id: string) {
    return this.userService.updateUser((id), user);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.deleteUser((id));
  }
}
