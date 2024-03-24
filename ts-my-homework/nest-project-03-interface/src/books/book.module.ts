import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DB } from '../db';

@Module({
  controllers: [BookController],
  providers: [
    {
      provide: 'iBookService',
      useClass: BookService,
    },
    DB,
  ],
})
export class BookModule {}
