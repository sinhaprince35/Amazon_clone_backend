require("dotenv").config();
const express = require("express");
const cors = require('cors'); // Import cors only once
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
app.use(cors()); // Set up CORS middleware

app.use(router);

const port = 8005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

DefaultData();
