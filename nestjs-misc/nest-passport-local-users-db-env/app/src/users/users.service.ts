import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { iUser } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(dto: CreateUserDto) {
    return new Promise((res) => {
      if (!dto.email || !dto.password) {
        res(null);
      }
      try {
        const user = new this.userModel(dto);
        user.save();
        res(user);
      } catch (e) {
        res(null);
      }
    });
  }

  findAll() {
    return new Promise(async (res) => {
      try {
        const users = await this.userModel.find().select('-__v');
        res(users);
      } catch (e) {
        res(null);
      }
    });
  }

  findOne(id: string) {
    return new Promise(async (res) => {
      try {
        const user = await this.userModel.findById(id).select('-__v');
        res(user);
      } catch (e) {
        res(null);
      }
    });
  }

  findByEmail(email: string): Promise<iUser | null> {
    return new Promise(async (res) => {
      try {
        const user = await this.userModel
          .findOne({ email: email })
          .select('-__v');
        res(user);
      } catch (e) {
        res(null);
      }
    });
  }

  remove(id: string) {
    return new Promise(async (res) => {
      try {
        const user = await this.userModel.findById(id);
        await user.deleteOne();
        res(true);
      } catch (e) {
        res(null);
      }
    });
  }

  update(id: string, dto: UpdateUserDto) {
    return new Promise(async (res) => {
      try {
        const user = await this.userModel.findById(id).select('-__v');
        if (!dto.email && !dto.password && !dto.firstName && !dto.lastName) {
          res(null);
        }
        user.lastName = dto.lastName ? dto.lastName : user.lastName;
        user.firstName = dto.firstName ? dto.firstName : user.firstName;
        user.email = dto.email ? dto.email : user.email;
        user.password = dto.password ? dto.password : user.password;
        user.save();
        res(user);
      } catch (e) {
        res(null);
      }
    });
  }
}
