const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    errorMsg: "Internal Server Error",
  });
};

module.exports = errorMiddleware;
