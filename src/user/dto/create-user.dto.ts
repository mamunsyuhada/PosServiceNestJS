export class CreateUserDto {
  id?: number;
  user_name: string;
  email: string;
  full_name: string;
  password: string;
  create_at: Date;
  update_at: Date;
}
