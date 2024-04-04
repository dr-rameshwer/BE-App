// models/Post.js
// Importing the Mongoose library
const mongoose = require("mongoose");
// Defining the schema for the 'Post' collection
const PostSchema = mongoose.Schema({
  // 'name' field with type String, and it's required
  name: {
    type: String,
    required: true,
  },
  // 'class' field with type String, and it's required
  age: {
    type: Number,
    required: true,
  },
  // 'age' field with type Number, and it's required
  email: {
    type: String,
    required: true,
  },
});

// Creating and exporting the 'Post' model using the schema
module.exports = mongoose.model("Post", PostSchema);
