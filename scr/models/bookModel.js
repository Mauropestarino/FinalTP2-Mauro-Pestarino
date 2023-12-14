class Book {
  constructor(code, title, author, status) {
    this.code = code;
    this.title = title;
    this.author = author;
    this.status = status || "disponible";
  }
}

module.exports = Book;
