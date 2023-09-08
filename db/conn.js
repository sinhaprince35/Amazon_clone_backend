const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Error" + error.message));
