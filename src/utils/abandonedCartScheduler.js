const Cart = require("../models/carts.model");
const sendMail = require("../utils/nodeMailConfig");

export const scheduler = async () => {
  const abandonedCart = await Cart.find({
    item_payment_status: "pending",
  }).populate("customer");

  const todaysDate = new Date();
  for (let i = 0; i < abandonedCart.length; i++) {
    let item = abandonedCart[i];
    const thirtyMinuteSchedule = new Date(item.thirty_minute_schedule);
    if (thirtyMinuteSchedule.toDateString() === todaysDate.toDateString()) {
      if (thirtyMinuteSchedule.getHours() === todaysDate.getHours()) {
        if (thirtyMinuteSchedule.getMinutes() === todaysDate.getMinutes()) {
          sendMail(
            "abc@server.com",
            `nileshkotle123@gmail.com`,
            `helloosijiojkadslkfj`,
            `asjdikfoisdlkjlkasdpoi`
          );
        }
      }
    }
  }
};
