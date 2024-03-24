import {
  Inject,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { iBookService, iBookDto } from './book.abstract';

@Controller('books')
export class BookController {
  constructor(
    @Inject('iBookService') private readonly bookService: iBookService,
  ) {}

  // ДЛЯ БРАУЗЕРА
  @Get()
  async getAllBooks() {
    const books = await this.bookService.getAllBooks();
    return JSON.stringify(books);
  }

  @Get(':id')
  async getBookById(@Param('id') id: string) {
    const book = await this.bookService.getBookById(id);
    if (book) {
      return JSON.stringify(book);
    } else {
      return `книги с номером ${id} нет`;
    }
  }

  // API
  @Post()
  async createBook(@Body() bookDto: iBookDto) {
    const answer = await this.bookService.createBook(bookDto);
    return answer;
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() bookDto: iBookDto) {
    const answer = await this.bookService.updateBookById(id, bookDto);
    return answer;
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    const answer = await this.bookService.deleteBookById(id);
    return answer;
  }
}
