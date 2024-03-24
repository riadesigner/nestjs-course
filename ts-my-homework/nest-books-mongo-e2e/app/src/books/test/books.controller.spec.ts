import { Test } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book, BookSchema } from '../book.schema';
import mongoose from 'mongoose';
import { bookStub } from './stubs/book.stub';
import { iBook } from '../entities/book.entity';
import { UpdateBookDto } from '../dto/update-book.dto';

jest.mock('../books.service');

describe('BooksController', () => {
  let bookController: BooksController;
  let bookService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: mongoose.model('Books', BookSchema),
        },
      ],
    }).compile();

    bookController = moduleRef.get<BooksController>(BooksController);
    bookService = await moduleRef.resolve<BooksService>(BooksService);
    jest.clearAllMocks();
  });

  describe('get Book', () => {
    describe('when findOne() is called', () => {
      let book: iBook;

      beforeEach(async () => {
        book = await bookController.findOne(bookStub()._id);
      });

      test('then it should call bookService', () => {
        expect(bookService.findOne).toHaveBeenCalledWith(bookStub()._id);
      });

      test('then it should return a book', () => {
        expect(book).toEqual(bookStub());
      });
    });
  });

  describe('get all Books', () => {
    describe('when findAll() is called', () => {
      let books: iBook[];

      beforeEach(async () => {
        books = await bookController.findAll();
      });

      test('then it should call bookService', () => {
        expect(bookService.findAll).toHaveBeenCalled();
      });

      test('then it should return a books array', () => {
        expect(books).toEqual([bookStub()]);
      });
    });
  });

  describe('update a Book', () => {
    describe('when update() is called', () => {
      let book: iBook;
      const dto: UpdateBookDto = { title: 'Book A' };

      beforeEach(async () => {
        book = await bookController.update(bookStub()._id, dto);
      });

      test('then it should call bookService', () => {
        expect(bookService.update).toHaveBeenCalledWith(bookStub()._id, dto);
      });

      test('then it should return a books array', () => {
        expect(book).toEqual(bookStub());
      });
    });
  });

  describe('remove a Book', () => {
    describe('when update() is called', () => {
      let result: boolean;

      beforeEach(async () => {
        result = await bookController.remove(bookStub()._id);
      });

      test('then it should call bookService', () => {
        expect(bookService.remove).toHaveBeenCalledWith(bookStub()._id);
      });

      test('then it should return a books array', () => {
        expect(result).not.toBeNull();
      });
    });
  });
});
