const Cart = require("../modals/cartSchema");

// get all data
const allData = async (req, res) => {
  try {
    const allCartData = await Cart.find({});
    if (allCartData) {
      return res.json({
        msg: "Product Inserted Successfully!",
        data: allCartData,
      });
    } else {
      return res.json({ msg: "Product Insert Faild" });
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server side error" });
  }
};

// get single data
const singleData = async (req, res) => {
  try {
    const singleCartData = await Cart.findById(req.params.id);
    if (singleCartData) {
      return res.json({
        msg: "Product Found Successfully!",
        data: singleCartData,
      });
    } else {
      return res.json({ msg: "Product was not found" });
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server Side Error" });
  }
};

// post a single Data
const postData = async (req, res) => {
  try {
    const postInfo = {
      image: req.body.image,
      price: req.body.price,
      title: req.body.title,
      details: req.body.details,
      category: req.body.category,
    };

    console.log(postInfo);
    const CartSave = await Cart.create(postInfo);
    if (CartSave) {
      return res.json({ msg: "Product Post Successfully!" });
    } else {
      return res.json({ msg: "Product Post Fild" });
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server Side Error" });
  }
};

// delete single Data
const deleteData = async (req, res) => {
  try {
    const deleteData = await Cart.findByIdAndRemove(req.params.id);
    if (deleteData) {
      res.json({ msg: "Successfully deleted" });
    } else {
      res.json({ msg: "Delete failed" });
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server Side Error" });
  }
};

// update single Data
const updateData = async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(req.params.id);
    if (updateCart) {
      res.json({ msg: "Successfully Updated" });
    } else {
      res.json({ msg: "Updated failed" });
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server Side Error" });
  }
};

module.exports = {
  allData,
  singleData,
  postData,
  deleteData,
  updateData,
};
