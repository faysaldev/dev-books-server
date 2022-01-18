const mongoose = require("mongoose");

const orderShema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      requery: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", orderShema);

module.exports = Cart;
