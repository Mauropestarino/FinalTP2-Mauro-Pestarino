const BookDao = require("../daos/bookDao");

class BookService {
  constructor() {
    this.bookDao = new BookDao();
  }

  getAllBooks() {
    return this.bookDao.getAllBooks();
  }

  getBookByCode(code) {
    return this.bookDao.getBookByCode(code);
  }

  addBook(book) {
    this.bookDao.addBook(book);
    return book;
  }

  removeBook(code) {
    const bookToRemove = this.getBookByCode(code);
    if (bookToRemove) {
      this.bookDao.removeBook(code);
      return bookToRemove;
    }
    return null;
  }
}

module.exports = BookService;
