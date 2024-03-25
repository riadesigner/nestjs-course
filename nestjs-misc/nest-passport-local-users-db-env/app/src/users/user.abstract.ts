import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { iUser } from './entities/user.entity';
import { SignInUserDto } from './dto/signIn-user.dto';

export interface iAnswer {
  status: 'fail' | 'success';
  error?: string;
  data: object | string;
}

@Injectable()
export abstract class iUsersService {
  abstract create(dto: CreateUserDto): Promise<iUser | null>;
  abstract findAll(): Promise<iUser[] | null>;
  abstract findOne(id: string): Promise<iUser | null>;
  abstract update(id: string, dto: UpdateUserDto): Promise<iUser | null>;
  abstract remove(id: string): Promise<boolean>;
  abstract findByEmail(email: string): Promise<iUser | null>;
  abstract signIn(dto: SignInUserDto): Promise<iUser | null>;
}
