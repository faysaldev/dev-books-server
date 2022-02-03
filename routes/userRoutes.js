const express = require("express");
const {
  allData,
  postData,
  singleData,
  deleteData,
  updateData,
  LoginPostData,
  getEmailData,
} = require("../controlars/userControlars");

const router = express.Router();

// all routes
router.get("/", (req, res) => {
  res.send("Hellow");
});

router.get("/all", allData);

router.post("/post", postData);

router.post("/login", LoginPostData);

router.post("/getemail", getEmailData);

router.get("/single/:id", singleData);

router.delete("/delete/:id", deleteData);

router.patch("/update/:id", updateData);

module.exports = router;
