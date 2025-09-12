import { Role } from './../auth/roles.enum';
import { Controller, Delete, Get, Put, Param, Body,Query, ParseUUIDPipe, Req} from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';  
import { UseGuards } from '@nestjs/common';
import { UpdateusertDto } from './dto/update-user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getUsers(
     @Query('page') page?: string,
        @Query('limit') limit?: string) {
             if (page && limit)
    return this.userService.getUsers(Number(page), Number(limit));
          return this.userService.getUsers(1, 5);
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard)
  getUserById(@Param('id', ParseUUIDPipe) id: string ) {
    return this.userService.getUserById((id));
  }

   @ApiBearerAuth()
   
  @Put(':id')
  @UseGuards(AuthGuard)
  updateUser(
    @Param('id', ParseUUIDPipe)id: string,
    @Body()user: UpdateusertDto,
  ){
    return this.userService.updateUser(id, user);
  }
   
  
@ApiBearerAuth()
@Delete(':id')
@UseGuards(AuthGuard) 
deleteUser(@Param('id', ParseUUIDPipe) id: string, @Req() req) {
  return this.userService.deleteUser(id, req.user);
}


}
