import { Injectable } from '@nestjs/common';

abstract class iBook {
  title?: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

interface iBookDto {
  title?: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

@Injectable()
abstract class iBookService {
  //   abstract getBookById(id: string): Promise<iBook | null>;
  abstract createBook(bookDto: iBookDto | null): Promise<iBook | null>;
  abstract getAllBooks(): Promise<iBook[] | null>;
}

export { iBook, iBookDto, iBookService };
