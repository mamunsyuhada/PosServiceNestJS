import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  id?: number;

  @IsString()
  @MaxLength(200)
  user_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(50)
  @MinLength(6)
  full_name: string;

  @IsString()
  @MaxLength(32)
  @MinLength(6)
  password: string;
}
