const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const booksController = require("./controllers/books.controller");
app.use("/books", booksController);

module.exports = app;
