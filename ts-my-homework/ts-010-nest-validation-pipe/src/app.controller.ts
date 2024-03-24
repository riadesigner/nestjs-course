import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AgeValidatorPipe } from './age/age.validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('age/:age')
  getAge(@Param('age', AgeValidatorPipe) age: string): string {
    return age;
  }
}
