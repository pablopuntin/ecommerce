import { IsNotEmpty, IsEmail, MaxLength, IsStrongPassword } from "class-validator";


export class LoginUserDto{

  @IsEmail()
    @MaxLength(50)
      email: string;
  
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