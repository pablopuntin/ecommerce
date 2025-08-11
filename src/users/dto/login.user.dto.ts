import { IsEmail, IsNotEmpty, MaxLength, IsStrongPassword,MinLength } from "class-validator";

export class LoginUserDto{

    @IsNotEmpty()
    @MaxLength(50)
    @IsEmail()
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
}