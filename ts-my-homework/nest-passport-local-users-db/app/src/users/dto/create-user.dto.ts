import {
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  @Length(3, 20)
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;
}
