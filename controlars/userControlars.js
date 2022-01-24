const User = require("../modals/userSchema");

// get all data
const allData = async (req, res) => {
  try {
    const allUserData = await User.find({});
    if (allUserData) {
      return res.json({
        msg: "Product Inserted Successfully!",
        data: allUserData,
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
    const singleUserData = await User.findOne({ email: req.params.id });
    if (singleUserData) {
      return res.json({
        msg: "Product Found Successfully!",
        data: singleUserData,
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
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      photoURL: req.body.photoURL,
    };

    console.log(postInfo);
    const UserSave = await User.create(postInfo);
    if (UserSave) {
      return res.json(UserSave);
    } else {
      return res.json({ msg: "Product Post Fild" });
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server Side Error" });
  }
};

// FIXME: Login post data
const LoginPostData = async (req, res) => {
  try {
    const postInfo = {
      email: req.body.email,
      password: req.body.password,
    };

    console.log(postInfo);
    // console.log(postInfo);
    const LoginData = await User.find({ email: postInfo.email });

    if (LoginData) {
      res.status(200).json(LoginData[0]);
    }
  } catch (err) {
    console.log(err);
    res.json({ msg: "There was an server Side Error" });
  }
};

// delete single Data
const deleteData = async (req, res) => {
  try {
    const deleteData = await User.findByIdAndRemove(req.params.id);
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
    const updateUser = await Product.findByIdAndUpdate(req.params.id);
    if (updateUser) {
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
  LoginPostData,
};
