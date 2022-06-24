const express = require("express");
const router = express.Router();
const blogSchema = require("../models/userSchema");
const blogs = require("../models/userSchema");

router.get("/blogs", async (req, res) => {
  const data = await blogSchema.find({});
  res.send(data);
  console.log(data);
});

router.get("/blogs/:id", async (req, res) => {
  try {
    const data = await blogSchema.find({ Id: req.params.id });
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/blogs", async (req, res) => {
  const { Id, Title, Body, CreatedAt, UpdatedAt, deleted, DeletedAt } =
    req.body;

  try {
    const addblog = new blogs({
      Id,
      Title,
      Body,
      CreatedAt,
      UpdatedAt,
      deleted,
      DeletedAt,
    });
    await addblog.save();
    res.status(201).json(addblog);
    console.log(addblog);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.put("/blogs/:id", (req, res) => {
  let id = req.params.id;
  blogs
    .findOneAndUpdate(
      { Id: id },
      {
        $set: {
          Title: req.body.Title,
          Body: req.body.Body,
          UpdatedAt: req.body.UpdatedAt,
          deleted: req.body.deleted,
          DeletedAt: req.body.DeletedAt,
        },
      }
    )
    .then((results) => {
      res.status(200).json({
        updated_blog: results,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/blogs/:id", (req, res) => {
  let id = req.params.id;
  blogs
    .findOneAndDelete({ Id: id })
    .then((results) => {
      console.log("permanently deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
