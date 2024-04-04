// routes/posts.js

// Importing the Express module
const express = require("express");
// Creating a router instance
const router = express.Router();
// Importing the Post model
const Post = require("../routes/post");

// GET all posts
router.get("/", async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();
    // Respond with the fetched posts as JSON
    res.json(posts);
  } catch (err) {
    // If an error occurs, respond with an error message
    res.json({ message: err });
  }
});

// POST a new post
router.post("/", async (req, res) => {
  // Create a new Post instance using data from the request body
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    // Save the new post to the database
    const savedPost = await post.save();
    // Respond with the saved post as JSON
    res.json(savedPost);
  } catch (err) {
    // If an error occurs, respond with an error message
    res.json({ message: err });
  }
});

// Exporting the router
module.exports = router;
