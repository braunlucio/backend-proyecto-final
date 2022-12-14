const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    'mongodb+srv://admin:we0aXoQw29VaoPZu@cluster0.dv3e1gg.mongodb.net/BookStore?retryWrites=true&w=majority'
  )
  .then(() => console.log("Conectado a la base de datos"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
