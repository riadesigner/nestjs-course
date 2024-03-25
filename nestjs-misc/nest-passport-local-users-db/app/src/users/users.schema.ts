
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { iUser } from './entities/user.entity';

export type UserDocument = User & Document;

@Schema()
export class User implements iUser {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  firstName?: string;
  @Prop()
  lastName?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
