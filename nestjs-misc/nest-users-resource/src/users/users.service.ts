import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import {
  iCreateUserDto,
  iUpdateUserDto,
  iUser,
  iUserService,
} from './users.abstract';

@Injectable()
export class UsersService implements iUserService {
  private users: iUser[] = [
    {
      id: 'd7520c5b-4185-41fa-9f2b-fc08331cb778',
      email: 'email 1',
      password: 'guess1',
    },
    {
      id: 'bf523d21-1e58-4e17-9456-ee2d323ae5ea',
      email: 'email 2',
      password: 'guess2',
    },
  ];
  constructor() {}
  updateById(id: string, dto: iUpdateUserDto): Promise<iUser> {
    return new Promise(async (res) => {
      const user = this.users.find((val) => {
        return val.id === id;
      });
      if (user) {
        //  update and save user
        const updated_user = { ...user, ...dto, id: id };
        for (const i in this.users) {
          if (this.users[i].id === id) {
            this.users[i] = updated_user;
            break;
          }
        }
        res(updated_user);
      } else {
        res(null);
      }
    });
  }
  getAllUsers(): Promise<iUser[]> {
    return new Promise((res) => {
      res(this.users);
    });
  }
  addUser(dto: iCreateUserDto): Promise<iUser | null> {
    return new Promise((res) => {
      const user = {
        id: uuidv4(),
        email: '',
        password: '',
        ...dto,
      };
      this.users.push(user);
      res(user);
    });
  }
  getById(id: string): Promise<iUser | null> {
    return new Promise((res) => {
      const user = this.users.find((val) => {
        return val.id === id;
      });

      res(user || null);
    });
  }
}
