import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

import { LocalGuard } from './local.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { RegisterUserDto } from '../user/dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() user: RegisterUserDto) {
    return this.authService.registerUser(user);
  }

  @UseGuards(LocalGuard)
  @Post('login')
  loginUser(@Req() req, @Body() user: LoginUserDto) {
    return req.session;
  }
}