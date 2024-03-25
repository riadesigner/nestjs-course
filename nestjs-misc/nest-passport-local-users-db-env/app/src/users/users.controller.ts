import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { iUsersService } from './user.abstract';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@UsePipes(new ValidationPipe())
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    @Inject(UsersService) private readonly usersService: iUsersService,
  ) {}

  @Get()
  async getAllUsers() {
    const users = await this.usersService.findAll();
    return users;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  /**
   *  Registration new user
   *  here
   * */
  @Post('/signup')
  async create(@Body() dto: CreateUserDto) {
    const email = dto.email;
    const userExist = await this.usersService.findByEmail(email);
    if (userExist) {
      throw new HttpException(
        `пользователь с email ${email} уже существует`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const newUser = await this.usersService.create(dto);
    if (!newUser) {
      throw new HttpException(
        `не удалось зарегистрировать пользователя с email: ${email}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return newUser;
  }

  /**
   *   PRIVATE ZONE
   *   ONLY BY JWT TOKEN
   * */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('req', req.user);
    return req.user;
  }

}
