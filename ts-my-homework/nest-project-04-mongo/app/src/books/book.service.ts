import { Injectable } from '@nestjs/common';
import { iBook, iBookDto, iBookService, Answer } from './book.abstract';

import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService implements iBookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
  // GET
  getAllBooks(): Promise<iBook[] | null> {
    return new Promise(async (res) => {
      const allbooks = await this.bookModel.find().select('-__v');
      res(allbooks);
    });
  }
  // GET
  getBookById(id: string): Promise<iBook | null> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.findById(id).select('-__v');
        res(book);
      } catch (e) {
        res(null);
      }
    });
  }
  // POST
  createBook(bookDto: iBookDto): Promise<Answer | null> {
    return new Promise(async (res) => {
      console.log('bookDto', bookDto);
      if (!bookDto.title) {
        res({
          error: true,
          data: 'не все обязательные параметры указаны',
        });
        return;
      }
      const newBook = new this.bookModel(bookDto);
      await newBook.save();
      res({
        error: false,
        data: newBook,
      });
    });
  }
  // PUT
  updateBookById(id: string, bookDto: iBookDto): Promise<Answer | null> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.findById(id);
        const { title } = bookDto;
        if (!title) {
          res({
            error: true,
            data: 'не все обязательные параметры указаны',
          });
          return;
        }
        book.title = title;
        await book.save();
        console.log(`updated book ${id}`, bookDto);
        res({
          error: false,
          data: book,
        });
      } catch (e) {
        res({
          error: true,
          data: `книги с номером ${id} не существует`,
        });
      }
    });
  }
  // DELETE
  deleteBookById(id: string): Promise<Answer | null> {
    return new Promise(async (res) => {
      try {
        const book = await this.bookModel.findById(id);
        await book.deleteOne();
        res({
          error: false,
          data: `книга ${id} удалена`,
        });
      } catch (e) {
        res({
          error: true,
          data: `книги с номером ${id} не существует`,
        });
      }
    });
  }
}
