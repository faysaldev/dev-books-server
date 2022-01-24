const mongoose = require("mongoose");

const dbConnection = async () => {
  mongoose
    .connect(`${process.env.CONNECTION}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Db Connected"))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;
