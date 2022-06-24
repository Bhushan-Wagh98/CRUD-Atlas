require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
require("./db/db");
const app = express();
const blogs = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 8080;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
//OphjoZpjFH2MKhZD

// mongodb+srv://bwagh5575:OphjoZpjFH2MKhZD@cluster0.iziif5l.mongodb.net/?retryWrites=true&w=majority
