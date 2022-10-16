const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cart_id: { type: String, required: true },
    item_id: { type: String, required: true },
    item_name: { type: String, required: false },
    item_payment_status: { type: String, default: "pending" },
    thirty_minute_schedule: { type: Date, required: false },
    one_day_schedule: { type: Date, required: false },
    three_day_schedule: { type: Date, required: false },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema); //posts collectoin
