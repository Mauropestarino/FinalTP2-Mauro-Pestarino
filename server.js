const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./scr/routes/bookRoutes");
const errorMiddleware = require("./scr/middlewares/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas de libros
app.use("/api/books", bookRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
