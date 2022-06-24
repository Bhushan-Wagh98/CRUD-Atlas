const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  Id: { unique: true, require: true, type: String },
  Title: { require: true, type: String },
  Body: { require: true, type: String },
  CreatedAt: { require: true, type: String },
  UpdatedAt: { require: true, type: String },
  deleted: { require: true, type: Boolean },
  DeletedAt: String,
});

const blogs = new mongoose.model("blogs", blogSchema);

module.exports = blogs;
