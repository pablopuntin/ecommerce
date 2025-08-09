import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersRepository } from 'src/users/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'TU_SECRETO_SUPER_SEGURO',  // cambiar por variable de entorno
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, UsersRepository],
  controllers: [AuthController],
})
export class AuthModule {}
