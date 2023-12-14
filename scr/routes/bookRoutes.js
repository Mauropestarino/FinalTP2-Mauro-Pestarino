const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const validationMiddleware = require("../middlewares/validationMiddleware");

// Endpoint para dar de alta un libro
router.post("/", validationMiddleware.validateBook, bookController.addBook);

// Endpoint para dar de baja un libro por código
router.delete("/:code", bookController.removeBook);

// Endpoint para listar un libro por código
router.get("/:code", bookController.getBookByCode);

module.exports = router;
