import { IsArray, ArrayMinSize, IsUUID, IsInt, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ProductInOrderDto {
  @IsUUID('4', { message: 'productId inválido' })
  productId: string;

  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @Min(1, { message: 'La cantidad mínima es 1' })
  quantity: number;
}

export class OrderDetailsDto {
  @IsArray({ message: 'products debe ser un array' })
  @ArrayMinSize(1, { message: 'Debe haber al menos un producto' })
  @ValidateNested({ each: true })
  @Type(() => ProductInOrderDto)
  products: ProductInOrderDto[];
}
