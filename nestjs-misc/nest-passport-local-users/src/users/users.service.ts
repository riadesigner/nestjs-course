import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      _id: 1,
      email: 'john@mail.ru',
      password: 'pass',
      firstName: 'john',
    },
    {
      _id: 2,
      email: 'maria@mail.ru',
      password: 'guess',
      firstName: 'maria',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
