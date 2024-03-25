import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { LoginUserDto } from '../user/dto/login-user.dto';
import { RegisterUserDto } from '../user/dto/register-user.dto';
import { User } from '../user/dto/abstract-user';

@Injectable()
export class AuthService {
  private users: User[] = [
    {
      id: 1,
      name: 'masha',
      email: 'masha@mail.ru',
      password: '$2b$12$zFwIH9grvIoeC/5jxqU.z.C2gFQCugFHZIHtHvA4bHmzVrGMCf3TG', // 1234
      role: 'admin',
    },
    {
      id: 2,
      name: 'vasya',
      email: 'vasya@mail.ru',
      password: '$2b$12$zFwIH9grvIoeC/5jxqU.z.C2gFQCugFHZIHtHvA4bHmzVrGMCf3TG', // 1234
      role: 'user',
    },
  ];

  async validateUser(user: LoginUserDto) {
    const foundUser = this.users.find((u) => u.email === user.email);
    if (!user || !(await compare(user.password, foundUser.password))) {
      throw new UnauthorizedException('Incorrect username or password');
    }
    const { password, ...retUser } = foundUser;
    return retUser;
  }

  async registerUser(user: RegisterUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = this.users.find((u) => u.email === user.email);
    if (existingUser) {
      throw new BadRequestException('User remail must be unique');
    }
    if (user.password !== user.confirmationPassword) {
      throw new BadRequestException(
        'Password and Confirmation Password must match',
      );
    }
    const { confirmationPassword, ...newUser } = user;
    this.users.push({
      ...newUser,
      password: await hash(user.password, 12),
      id: this.users.length + 1,
    });
    return {
      id: this.users.length,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }

  findById(id: number): Omit<User, 'password'> {
    const { password, ...user } = this.users.find((u) => u.id === id);
    if (!user) {
      throw new BadRequestException(`No user found with id ${id}`);
    }
    return user;
  }
}
