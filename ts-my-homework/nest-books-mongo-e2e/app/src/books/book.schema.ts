import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { iBook } from './entities/book.entity';

export type BookDocument = Book & Document;

@Schema()
export class Book implements iBook {
  @Prop()
  _id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  authors: string;
  @Prop()
  favorite: string;
  @Prop()
  fileCover: string;
  @Prop()
  fileName: string;
  @Prop()
  fileBook: string;
}
export const BookSchema = SchemaFactory.createForClass(Book);
