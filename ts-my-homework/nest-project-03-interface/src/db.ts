import { Injectable } from '@nestjs/common';
import { iBook, iBookDto } from './books/book.abstract';

@Injectable()
export class DB {
  private arr_books: Array<iBook> | null = [];

  getAllBooks(): Promise<Array<iBook> | null> {
    return new Promise((res) => {
      res(this.arr_books);
    });
  }
  addBook(opt: iBookDto | null): Promise<iBook> | null {
    console.log('iBookDto', opt);
    this.arr_books.push(opt);
    return null;
  }
}
