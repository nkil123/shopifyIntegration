const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    book_name: { type: String, required: true },
    body: { type: String, required: false }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema); //posts collectoin
