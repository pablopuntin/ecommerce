import { Role } from './../auth/roles.enum';
import { Controller, Delete, Get, Put, Param, Body,Query, ParseUUIDPipe} from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';  
import { UseGuards } from '@nestjs/common';
import { UpdateusertDto } from './dto/update-user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  //aplicar el decorator role
  @Get()
  @Roles(Role.Admin)//'admin' pasar al resto de rutas
  @UseGuards(AuthGuard, RolesGuard)
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

 
  @UseGuards(AuthGuard)
  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string ) {
    return this.userService.getUserById((id));
  }



  //cambiar status a 418(el servidor se rehusa a hacer lo que se le pide)
  // @UseGuards(AuthGuard)
  // @HttpCode(418)
  // @Get('cofee')
  // getCofee() {
  //   return 'no se hacer cafe, solo te y mate, jaja';
  //   //return this.userService.getCofee();
  // }


  @UseGuards(AuthGuard)
  @Put(':id')
  updateUser(
    @Param('id', ParseUUIDPipe)id: string,
    @Body()user: UpdateusertDto,
  ){
    return this.userService.updateUser(id, user);
  }
  
  
  

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.deleteUser((id));
  }
}
