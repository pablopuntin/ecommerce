import { PartialType } from '@nestjs/mapped-types';
import {CreateUserDto} from './create-user.dto'
import { IsOptional, IsString } from 'class-validator';

export class UpdateusertDto extends PartialType(CreateUserDto) {
     @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  city?: string;

  // Aquí puedes agregar propiedades adicionales si es necesario
  // o dejarlo vacío si solo quieres que sea un DTO parcial de CreateProductDto
}
// PartialType permite que todas las propiedades de CreateProductDto sean opcionales en UpdateProductDto
// Esto es útil para las operaciones de actualización donde no es necesario proporcionar todos los campos.
// Por ejemplo, si CreateProductDto tiene propiedades como name, description, price, etc.
// entonces UpdateProductDto tendrá las mismas propiedades, pero todas serán opcionales.
// Esto permite que al actualizar un producto, solo se envíen los campos que se desean actualizar,
// sin necesidad de enviar todos los campos del producto.