import { bookStub } from '../test/stubs/book.stub';

export const BooksService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockReturnValue(bookStub()),
  findAll: jest.fn().mockReturnValue([bookStub()]),
  create: jest.fn().mockReturnValue(bookStub()),
  update: jest.fn().mockReturnValue(bookStub()),
  remove: jest.fn().mockReturnValue(true),
});
