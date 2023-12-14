const BookService = require("../services/bookService");

const bookService = new BookService();

const addBook = (req, res) => {
  try {
    const { code, title, author } = req.body;

    const existingBook = bookService.getBookByCode(code);
    if (existingBook) {
      return res.status(400).json({
        errorMsg: "Book with the provided code already exists",
      });
    }

    const newBook = bookService.addBook({ code, title, author });

    res.status(201).json({
      success: true,
      data: newBook,
      message: "Book added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      errorMsg: "Internal Server Error",
    });
  }
};

const removeBook = (req, res) => {
  try {
    const code = req.params.code;
    const removedBook = bookService.removeBook(code);

    if (removedBook) {
      res.json({
        success: true,
        data: removedBook,
        message: "Book removed successfully",
      });
    } else {
      res.status(404).json({
        errorMsg: "Book not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      errorMsg: "Internal Server Error",
    });
  }
};

const getBookByCode = (req, res) => {
  try {
    const code = req.params.code;
    const book = bookService.getBookByCode(code);

    if (book) {
      res.json({
        success: true,
        data: book,
      });
    } else {
      res.status(404).json({
        errorMsg: "Book not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      errorMsg: "Internal Server Error",
    });
  }
};

module.exports = {
  addBook,
  removeBook,
  getBookByCode,
};
