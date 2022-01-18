// import all of the extranal module
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

// custom module config
const dbConnection = require("./config/dbConnection");
const productrouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRoutes");

// app intilization
const app = express();

// db CONNECTION

dbConnection();

// app use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/dev/product", productrouter);
app.use("/dev/user", userRouter);
app.use("/dev/cart", cartRouter);

app.listen(5000, () => console.log("Server Running"));
