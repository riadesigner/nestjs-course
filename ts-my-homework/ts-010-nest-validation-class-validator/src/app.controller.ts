import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SigninDto } from './register/dto/signin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(new ValidationPipe())
  @Post('signin')
  getAge(@Body() body: SigninDto): SigninDto {
    return body;
  }
}
