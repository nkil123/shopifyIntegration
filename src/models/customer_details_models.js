const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customer_id: { type: String, required: true },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", customerSchema); //posts collectoin
