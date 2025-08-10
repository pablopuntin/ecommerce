import { PartialType } from '@nestjs/mapped-types';
import {CreateUserDto} from './users.dto'
import { IsOptional, IsString, IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from 'class-validator';
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
   @MaxLength(50)
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
  // Aquí puedes agregar propiedades adicionales si es necesario
  // o dejarlo vacío si solo quieres que sea un DTO parcial de CreateProductDto
}
// PartialType permite que todas las propiedades de CreateProductDto sean opcionales en UpdateProductDto
// Esto es útil para las operaciones de actualización donde no es necesario proporcionar todos los campos.
// Por ejemplo, si CreateProductDto tiene propiedades como name, description, price, etc.
// entonces UpdateProductDto tendrá las mismas propiedades, pero todas serán opcionales.
// Esto permite que al actualizar un producto, solo se envíen los campos que se desean actualizar,
// sin necesidad de enviar todos los campos del producto.