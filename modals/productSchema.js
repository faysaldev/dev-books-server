const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    details: {
      required: true,
      type: String,
    },
    category: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    userImg: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
