import { Controller, Delete, Get, HttpCode, Post, Put, Param, Body,Query } from '@nestjs/common';
import { UserService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(
     @Query('page') page: number,
        @Query('limit') limit: number 
  ) {
    return this.userService.getPaginatedUsers(page, limit);
  }

  //para un id, por ejemplo get/1
  @Get(':id')
  getUserById(@Param('id') id: string ) {
    return this.userService.getUserById(Number(id));
  }



  //cambiar status a 418(el servidor se rehusa a hacer lo que se le pide)
  @HttpCode(418)
  @Get('cofee')
  getCofee() {
    return 'no se hacer cafe, solo te y mate, jaja';
    //return this.userService.getCofee();
  }

  @Post()
  @HttpCode(201) // 201 Created
  createUser(@Body()data) {
   
   return this.userService.createUser(data);
  }

  @Put(':id')
  updateUserById(@Body() data, @Param('id') id: string) {
    return this.userService.updateUserById(Number(id), data);
  }

  @Delete(':id')
  deleteUsersById(@Param('id') id: string) {
    return this.userService.deleteUserById(Number(id));
  }
}
