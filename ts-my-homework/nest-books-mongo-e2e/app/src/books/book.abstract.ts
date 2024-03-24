import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { iBook } from './entities/book.entity';

@Injectable()
abstract class iBookService {
  abstract findAll(): Promise<iBook[] | null>;
  abstract findOne(id: string): Promise<iBook | null>;
  abstract create(dto: CreateBookDto): Promise<iBook | null>;
  abstract remove(id: string): Promise<boolean>;
  abstract update(id: string, dto: UpdateBookDto): Promise<iBook | null>;
}

export { iBookService };
