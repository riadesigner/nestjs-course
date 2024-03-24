import { PipeTransform } from '@nestjs/common';

export class AgeValidatorPipe implements PipeTransform {
  transform(age: string) {
    return `transformed age: ${age}`;
  }
}
