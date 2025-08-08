import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
