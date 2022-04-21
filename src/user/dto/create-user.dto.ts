import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  @IsOptional()
  id?: number;

  @IsString()
  @IsExist([User, 'user_name'])
  @MaxLength(200)
  user_name: string;

  @IsEmail()
  @IsExist([User, 'email'])
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
