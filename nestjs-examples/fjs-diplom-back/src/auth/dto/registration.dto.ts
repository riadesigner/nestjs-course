import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDto {
  @ApiProperty({ example: 'mail@mail.ru', description: 'Электронная почта' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  readonly password: string;

  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  readonly name: string;

  @ApiProperty({ example: '89271111111', description: 'Телефон пользователя' })
  readonly contactPhone: string;
}
