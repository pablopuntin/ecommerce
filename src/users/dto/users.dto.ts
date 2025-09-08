import { ApiHideProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsNumber,  IsNotEmpty, MinLength, MaxLength, IsEmail, IsStrongPassword, Validate, IsOptional,} from "class-validator";
import { MatchPassword } from "src/decorators/matchPassword.decorators";
import { Order } from "src/orders/entities/order.entity";
import { Type } from "class-transformer";

export class CreateUserDto {
  
  
   
  /**
   * debe ser un string de entre 3 y 50 caracteres
   * @example 'test user 01'
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  /**
   * debe ser un email con un maximo de 50 caracteres
   * @example 'testuser01@mail.com'
   */
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
    email: string;

  /**
   * debe ser un string de entre 8 y 70 caracteres
   * debe tener una minuscula, una mayuscula, un simbolo especial y un numero
   * @example 'testUser-01'
   */  
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

  /**
   * debe ser un string de entre 8 y 70 caracteres
   * debe tener una minuscula, una mayuscula, un simbolo especial y un numero
   * @example 'testUser-01'
   */
  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  confirmPassword: string
  
    /**
   * debe ser un string de entre 3 y 80 caracteres
    * @example 'test Calle 01'
   */
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    /**
   * debe ser un numero
    * @example 0123456789
   */
   @IsNotEmpty()
   @IsNumber()
     @Type(() => Number)
    phone: number;

    /**
   * debe tener entre 5 y 20 caracteres
    * @example 'test Country'
   */
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    country: string;

        /**
   * debe tener entre 5 y 20 caracteres
    * @example 'test City'
   */
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;

    @ApiHideProperty()
    @IsBoolean()
    @IsOptional()
    isAdmin?: boolean;

}
export class LoginUserDto{

  
  /**
   * debe ser un email con un maximo de 50 caracteres
   * @example 'testuser01@mail.com'
   */
  @IsEmail()
    @MaxLength(50)
      email: string;
  
      /**
   * debe ser un string de entre 8 y 70 caracteres
   * debe tener una minuscula, una mayuscula, un simbolo especial y un numero
   * @example 'testUser-01'
   */  
    @IsNotEmpty()
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


}
