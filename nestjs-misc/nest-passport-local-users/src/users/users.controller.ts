import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/users')
export class UsersController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('req', req.user);
    return req.user;
  }
}
