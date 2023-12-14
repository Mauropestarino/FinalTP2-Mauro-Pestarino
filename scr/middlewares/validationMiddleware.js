const validateBook = (req, res, next) => {
  const { code, title, author } = req.body;

  if (!code || !title || !author) {
    return res.status(400).json({
      errorMsg: "Code, title, or author is missing",
    });
  }

  next();
};

module.exports = {
  validateBook,
};
