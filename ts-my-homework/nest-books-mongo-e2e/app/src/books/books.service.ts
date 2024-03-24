import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { iBookService } from './book.abstract';
import { iBook } from './entities/book.entity';

@Injectable()
export class BooksService implements iBookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
  findAll(): Promise<iBook[] | null> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.find().select('-__v');
        res(book);
      } catch (e) {
        res(null);
      }
    });
  }

  findOne(id: string): Promise<iBook | null> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.findById(id).select('-__v');
        res(book);
      } catch (e) {
        res(null);
      }
    });
  }

  create(dto: CreateBookDto): Promise<iBook> {
    return new Promise(async (res) => {
      if (!dto.title) {
        console.log('err, needs a dto.title property');
        res(null);
      } else {
        const newBook = await new this.bookModel(dto);
        await newBook.save();
        res(newBook);
      }
    });
  }

  remove(id: string): Promise<boolean> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.findById(id);
        await book.deleteOne();
        res(true);
      } catch (e) {
        res(false);
      }
    });
  }

  update(id: string, dto: UpdateBookDto): Promise<iBook | null> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.findById(id);
        const { title } = dto;
        if (!title) {
          res(null);
          return;
        }
        book.title = title;
        await book.save();
        res(book);
      } catch (e) {
        res(null);
      }
    });
  }
}
