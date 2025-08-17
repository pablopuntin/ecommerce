// orders.dto.ts
import { IsNotEmpty, IsDate, MinDate, IsUUID, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderDetailsDto } from '../../order-details/dto/orderDetails.dto';
import { ApiProperty } from '@nestjs/swagger';

export class OrdersDto {

  @ApiProperty({
    description: 'fecha en formato dd/mm/yy',
    example: '12/08/2025'
  })
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @Type(() => Date) 
  @IsDate({ message: 'Debe ser una fecha válida' })
  @MinDate(new Date('2020-01-01'), { message: 'La fecha debe ser igual o posterior al 01/01/2020' })
  date: Date;

  @ApiProperty({
    description: 'id del usuario obligatorio'
  })
  @IsNotEmpty({ message: 'userId es obligatorio' })
  @IsUUID('4', { message: 'userId inválido' })
  userId: string;


  @IsOptional()
  @IsUUID('4', { message: 'orderDetailId inválido' })
  orderDetailId?: string;


  @IsOptional()
  @ValidateNested()
  @Type(() => OrderDetailsDto)
  orderDetails?: OrderDetailsDto;
}
