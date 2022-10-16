const express = require("express");

const Cart = require("../models/carts.model");
const Customer = require("../models/customer_details_models");
const moment = require("moment");
const sendMail = require("../utils/nodeMailConfig");
const { getMaxListeners } = require("process");
const { route } = require("..");

const router = express.Router();

router.post("/checkoutCreation", async (req, res) => {
  try {
    const data = req.body;
    const customer = data.customer;
    let findCustomer = await Customer.findOne({ customer_id: customer.id });
    if (!findCustomer) {
      findCustomer = await Customer.create({
        customer_id: customer.id,
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
      });
    }

    const items = data.line_items;

    const thirty_minute_schedule = moment().add(30, "minutes");
    const one_day_schedule = moment().add(1, "day");
    const three_day_schedule = moment().add(3, "days");

    for (let i = 0; i < items.length; i++) {
      let findItemByCartIdAndItemsId = await Cart.findOne({
        cart_id: data.id,
        item_id: items[i].product_id,
      });

      if (!findItemByCartIdAndItemsId) {
        await Cart.create({
          cart_id: data.id,
          item_id: items[i].product_id,
          item_name: items[i].title,
          customer: findCustomer,
          thirty_minute_schedule,
          one_day_schedule,
          three_day_schedule,
        });
      }
    }

    return res.status(201).send("Added items to cart");
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.post("/orderPayment", async (req, res) => {
  try {
    const data = req.body;
    console.log("---------data------------", data);
    // let paidItems = data.line_items;

    const cartItems = await Cart.find({});

    // for (let i = 0; i < cartItems.length; i++) {
    //   let item = paidItems.filter((item) => {
    //     return item.product_id === cartItems[i].item_id;
    //   });
    //   let filter = {id:}
    //   await Cart.findOneAndUpdate({})
    // }

    if (!cartItems)
      res.status.json({ message: "no items exist", status: "Failed" });

    return res.status(201).send(cartItems);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const cartItems = await Cart.find({}).populate("customer");
    return res.status(201).send(cartItems);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/customers", async (req, res) => {
  try {
    const allCustomers = await Customer.find({});
    return res.status(201).send(cartItems);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
