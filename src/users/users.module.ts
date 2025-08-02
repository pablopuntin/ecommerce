import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UserService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
