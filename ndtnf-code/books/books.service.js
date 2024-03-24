const { Book } = require("./books.model");

class BooksService {
  constructor() {
    console.log("new BooksService");
  }
  async create(data) {
    const book = new Book(data);
    await book.save();
    return book;
  }
  findAll() {
    return Book.find();
  }
}

module.exports = { BooksService };
