import * as Joi from 'Joi';
import { RegisterDto } from 'src/register/dto/register.dto';

export const registerSchema = Joi.object<RegisterDto>().keys({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  age: Joi.number().min(18).required(),
  gender: Joi.number().allow(0, 1).required(),
  about: Joi.string().optional(),
});
