const express = require("express");
// import Shopify, { ApiVersion } from "@shopify/shopify-api";
var cron = require("node-cron");
const moment = require("moment");
require("dotenv").config();
const { API_KEY, API_SECRET_KEY, SHOP, SCOPES, HOST, HOST_SCHEME } =
  process.env;
// const axios = require("axios");

const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const products = async () => {};

// app.post("/checkoutCreation", async (request, response) => {
//   console.log(request.body);
// });
// app.post("/orderPayment", async (request, response) => {
//   console.log(request.body);
// });
const cartsController = require("./controllers/carts.controller");
const res = require("express/lib/response");
const { default: axios } = require("axios");

cron.schedule("* * * * *", () => {
  //   console.log("running a task every minute");
});
const todays = new Date();
let date = new Date("2022-10-15T11:18:25.461Z");

console.log(todays.getDate(), date.getDate());

app.use("", cartsController);

module.exports = app;
