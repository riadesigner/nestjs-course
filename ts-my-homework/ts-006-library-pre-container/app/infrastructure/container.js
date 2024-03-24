
const {Container, decorate, injectable} = require('inversify');
const {BookRepository} = require('../books/book-repository');

const container = new Container();

decorate(injectable(),BookRepository);
container.bind("BOOKS_REPOSITORY").to(BookRepository).inSingletonScope();

module.exports = {container};