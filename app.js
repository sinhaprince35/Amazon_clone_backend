require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8005;
require("./db/conn");
const cookieParser = require("cookie-parser");

const Products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser());

// Configure CORS to allow requests from a specific origin
const allowedOrigins = ["*"];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(router);

// Error handling for the server and database connection
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  DefaultData();
});
