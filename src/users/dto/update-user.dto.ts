import { PartialType } from '@nestjs/mapped-types';
import {CreateUserDto} from './users.dto'
import { IsOptional, IsString, IsNotEmpty, IsStrongPassword, MaxLength, MinLength, IsEmpty } from 'class-validator';
import { Order } from 'src/orders/entities/order.entity';

export class UpdateusertDto extends PartialType(CreateUserDto) {
  //datos que no llegan por body, el id y Orders de la relacion con Order
  id: string;
  orders: Order[];


  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

 @IsNotEmpty()
 @MinLength(8)
   @MaxLength(70)
   @IsStrongPassword({
     minLowercase: 1,
     minUppercase: 1,
     minNumbers: 1,
     minSymbols: 1,},
     {
       message: `La contraseña debe contener al menos:
     - 1 letra minúscula
     - 1 letra mayúscula
     - 1 número
     - 1 símbolo`
     
   })
   password: string;

  @IsOptional()
  @IsString()
  phone : number;

  @IsEmpty()
  isAdmin:boolean;

  
}
