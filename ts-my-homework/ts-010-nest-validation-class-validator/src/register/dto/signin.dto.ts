import {
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  IsBoolean,
  Length,
} from 'class-validator';

import { Transform } from 'class-transformer';

export class SigninDto {
  @IsDefined()
  @IsEmail()
  public email: string;

  @IsString()
  @Length(3, 30)
  public password: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ obj, key }) => {
    return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
  })
  public remember: boolean;
}
