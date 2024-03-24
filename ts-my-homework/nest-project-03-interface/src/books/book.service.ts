import { Inject, Injectable } from '@nestjs/common';
import { iBook, iBookDto, iBookService } from './book.abstract';
import { DB } from '../db';

@Injectable()
export class Book implements iBook {
  constructor(
    public title = '',
    public description = '',
    public authors = '',
    public favorite = '',
    public fileCover = '',
    public fileName = '',
    public fileBook = '',
  ) {
    return this;
  }
}

@Injectable()
export class BookService implements iBookService {
  constructor(@Inject(DB) public db: DB) {}
  getAllBooks(): Promise<iBook[] | null> {
    return new Promise(async (res) => {
      res(this.db.getAllBooks());
    });
  }
  createBook(bookDto: iBookDto): Promise<iBook> {
    return new Promise(async (res) => {
      const book = await this.db.addBook(bookDto);
      res(book);
    });
  }
}
