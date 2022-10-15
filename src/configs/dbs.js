const mongoose = require("mongoose");

module.exports = () => {
  console.log("connected to mongo");
  return mongoose.connect("mongodb://localhost:27017/test");
};
