const express = require("express");

const Book = require("../models/books.model");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    console.log(book);
    return res.status(201).send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  console.log("getall");
  try {
    const books = await Book.find({});
    return res.status(201).send(books);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;
