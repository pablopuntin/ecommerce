import { Controller, Delete, Get, HttpCode, Post, Put, Param, Body,Query, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';  
import { UseGuards } from '@nestjs/common';
import { UpdateusertDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/users.dto';
import { from } from 'form-data';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers(
     @Query('page') page?: string,
        @Query('limit') limit?: string) {
          //si se envian
          if (page && limit)
    return this.userService.getUsers(Number(page), Number(limit));
          //si no se envian
          return this.userService.getUsers(1, 5);
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

  // @HttpCode(201) // 201 Created
  // @Post()
  // addUser(@Body()user: CreateUserDto) {
  //     return this.userService.addUser(user);
  // }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateUser(
    @Param('id', ParseUUIDPipe)id: string,
    @Body()user: UpdateusertDto,
  ){
    return this.userService.updateUser(id, user);
  }
  
  
  

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.deleteUser((id));
  }
}
