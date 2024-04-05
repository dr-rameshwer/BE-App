// routes/posts.js

// Import required modules
const express = require("express");
const router = express.Router();
const PostModel = require("../models/posts"); // Import the PostModel defined in the models/posts.js file

// Define route to handle GET request for all posts
router.get("/", async (req, res) => {
  try {
    // Fetch all posts from the database using the PostModel
    const posts = await PostModel.find();
    // Respond with JSON containing the fetched posts
    res.json(posts);
  } catch (err) {
    // If an error occurs during fetching, respond with the error message
    res.json({ message: err });
  }
});

// Define route to handle POST request to create a new post
router.post("/", async (req, res) => {
  // Create a new PostModel instance using data from the request body
  const post = new PostModel({
    name: req.body.name, // Assign the 'name' field from request body to the 'name' field in the PostModel instance
    age: req.body.age, // Assign the 'age' field from request body to the 'age' field in the PostModel instance
    email: req.body.email, // Assign the 'email' field from request body to the 'email' field in the PostModel instance
  });

  try {
    // Save the newly created post to the database
    const savedPost = await post.save();
    // Respond with JSON containing the saved post
    res.json(savedPost);
  } catch (err) {
    // If an error occurs during saving, respond with the error message
    res.json({ message: err });
  }
});

// Export the router to make it available for use in other parts of the application
module.exports = router;
