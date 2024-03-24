import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { iBook } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return new Promise((res) => {
      res(this.booksService.create(createBookDto));
    });
  }

  @Get()
  findAll(): Promise<iBook[] | null> {
    return new Promise(async (res) => {
      const books = await this.booksService.findAll();
      res(books);
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<iBook | null> {
    return new Promise(async (res) => {
      const book = await this.booksService.findOne(id);
      res(book);
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBookDto,
  ): Promise<iBook | null> {
    return new Promise(async (res) => {
      const book = await this.booksService.update(id, dto);
      res(book);
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return new Promise((res) => {
      res(this.booksService.remove(id));
    });
  }
}
