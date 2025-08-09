// orders.dto.ts
import { IsNotEmpty, IsDate, MinDate, IsUUID, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderDetailsDto } from '../../order-details/dto/orderDetails.dto';

export class OrdersDto {
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @Type(() => Date) // convierte string -> Date
  @IsDate({ message: 'Debe ser una fecha válida' })
  @MinDate(new Date('2020-01-01'), { message: 'La fecha debe ser igual o posterior al 01/01/2020' })
  date: Date;

  @IsNotEmpty({ message: 'userId es obligatorio' })
  @IsUUID('4', { message: 'userId inválido' })
  userId: string;

  // Si vas a recibir únicamente el id del orderDetail:
  @IsOptional()
  @IsUUID('4', { message: 'orderDetailId inválido' })
  orderDetailId?: string;

  // O si permitís crear/mandar el detalle anidado:
  @IsOptional()
  @ValidateNested()
  @Type(() => OrderDetailsDto)
  orderDetails?: OrderDetailsDto;
}
