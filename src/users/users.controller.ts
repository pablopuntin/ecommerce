import { Controller, Delete, Get, HttpCode, Post, Put, Param, Body,Query } from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';  
import { UseGuards } from '@nestjs/common';

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
  getUserByEmail(
    @Query('email') email: string,
    @Query('password') name: string,
  ) {
    return this.userService.getUserByEmail(email, name);
  }

  //para un id, por ejemplo get/1
  @UseGuards(AuthGuard)
  @Get(':id')
  getUserById(@Param('id') id: string ) {
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
  addUser(@Body()data) {
   
   return this.userService.addUser(data);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  updateUser(@Body() data, @Param('id') id: string) {
    return this.userService.updateUser((id), data);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser((id));
  }
}
