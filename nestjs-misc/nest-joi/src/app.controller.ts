import {
  Controller,
  Body,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterDto } from './register/dto/register.dto';
import { registerSchema } from './register/validation/schemas/register.schema';
import { JoiValidationPipe } from './register/validation/joi.validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(new JoiValidationPipe(registerSchema))
  @Post('/register')
  register(@Body() body: RegisterDto): string {
    return JSON.stringify(body);
  }
}
