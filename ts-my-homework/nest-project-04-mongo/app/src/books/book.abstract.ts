import { Injectable } from '@nestjs/common';

abstract class iBook {
  title: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

interface iBookDto {
  title: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

type Answer = {
  error: boolean;
  data: iBook | string;
};

@Injectable()
abstract class iBookService {
  // GET
  abstract getAllBooks(): Promise<iBook[] | null>;
  // GET
  abstract getBookById(id: string): Promise<iBook | null>;
  // POST
  abstract createBook(bookDto: iBookDto | null): Promise<Answer | null>;
  // DELETE
  abstract deleteBookById(id: string): Promise<Answer | null>;
  // PUT
  abstract updateBookById(
    id: string,
    bookDto: iBookDto,
  ): Promise<Answer | null>;
}

export { iBook, iBookDto, iBookService, Answer };
