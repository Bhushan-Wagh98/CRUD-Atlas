const mongoose = require("mongoose");
const DB =
  "mongodb+srv://bwagh5575:OphjoZpjFH2MKhZD@cluster0.iziif5l.mongodb.net/blogs?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection started");
  })
  .catch((error) => {
    console.log(error.message);
  });
