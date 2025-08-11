import { IsString, IsBoolean, IsNumber, IsUrl } from "class-validator";

export class CreateProductDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsNumber()
  price?: number;

  @IsBoolean()
  available?: boolean;

  @IsUrl()
  imageUrl?: string;
}