const { Container, decorate, injectable } = require("inversify");
const { BooksService } = require("./books/books.service");
const container = new Container();

decorate(injectable(), BooksService);
container.bind("BOOKS_SERVICE").to(BooksService).inSingletonScope();

module.exports = { container };
