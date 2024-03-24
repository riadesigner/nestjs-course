import { Book } from 'src/books/book.schema';

export const bookStub = (): Book => {
  return {
    _id: '123',
    title: 'Book F',
    description: 'Some text about Book F',
    authors: '',
    favorite: '',
    fileCover: '',
    fileName: '',
    fileBook: '',
  };
};
