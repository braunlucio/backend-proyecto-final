const mongoose = require("mongoose");
const express = require("express");
const dotenv = require('dotenv').config();
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
require('./db/connection');
const PORT = process.env.PORT || 3001; 



// Middlewares
app.use(express.json());
app.use(cors());
app.use("/", router); // localhost:5000/books

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
})

// mongoose
//   .connect(
//     'mongodb+srv://admin:we0aXoQw29VaoPZu@cluster0.dv3e1gg.mongodb.net/BookStore?retryWrites=true&w=majority'
//   )
//   .then(() => console.log(""))
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch((err) => console.log(err));
