import { IsString, IsBoolean, IsNumber, IsUrl, IsNotEmpty, MinLength, MaxLength, IsEmail, IsStrongPassword, Validate, IsOptional,} from "class-validator";
import { MatchPassword } from "src/decorators/matchPassword.decorators";
import { Order } from "src/orders/entities/order.entity";


export class CreateUserDto {
   

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
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

  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  confirmPassword: string
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    address: string;

   @IsNotEmpty()
   @IsNumber()
    phone: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    country: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;

    @IsBoolean()
    @IsOptional()
    isAdmin?: boolean;

}