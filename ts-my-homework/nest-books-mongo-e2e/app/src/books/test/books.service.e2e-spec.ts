import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BooksService } from '../books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book, BookSchema } from '../book.schema';
import { BooksController } from '../books.controller';
import mongoose from 'mongoose';
import { bookStub } from './stubs/book.stub';

jest.mock('../books.service');

describe('BookdController (e2e)', () => {
  let app: INestApplication;
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

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('api books', () => {
    it('/GET all books', async () => {
      const books = await bookController.findAll();
      return request(app.getHttpServer())
        .get('/books')
        .expect(200)
        .expect(books);
    });

    it('/GET book by id', () => {
      const id = bookStub()._id;
      return request(app.getHttpServer())
        .get(`/books/${id}`)
        .expect(200)
        .expect(bookService.findOne(id));
    });

    it('/POST add book', async () => {
      const bookTitle = bookStub().title;
      const result = await bookService.create({ title: bookTitle });
      return request(app.getHttpServer())
        .post('/books')
        .send(`title=${bookTitle}`)
        .expect(201)
        .expect(result);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
