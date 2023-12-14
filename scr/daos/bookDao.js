class BookDao {
  constructor() {
    this.books = [];
  }

  getAllBooks() {
    return this.books;
  }

  getBookByCode(code) {
    return this.books.find((book) => book.code === code);
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(code) {
    this.books = this.books.filter((book) => book.code !== code);
  }
}

module.exports = BookDao;
