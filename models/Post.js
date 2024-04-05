// routes/posts.js
const express = require("express");
const router = express.Router();
const Post = require("./Post"); // Corrected import path

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST a new post
router.post("/", async (req, res) => {
  // Create a new Post instance using data from the request body
  const post = new Post({
    name: req.body.name, // Corrected field names
    age: req.body.age, // Corrected field names
    email: req.body.email, // Corrected field names
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
