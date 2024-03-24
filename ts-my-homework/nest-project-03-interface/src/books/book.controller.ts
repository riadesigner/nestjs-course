import { Inject, Controller, Get } from '@nestjs/common';
import { iBookService } from './book.abstract';

@Controller('books')
export class BookController {
  constructor(
    @Inject('iBookService') private readonly bookService: iBookService,
  ) {}

  @Get()
  async getAllBooks() {
    // при каждом посещении добавляем книгу
    const all = await this.bookService.getAllBooks();
    await this.bookService.createBook({ title: `Книга ${all.length}` });
    const books = await this.bookService.getAllBooks();
    return JSON.stringify(books);
  }
}
