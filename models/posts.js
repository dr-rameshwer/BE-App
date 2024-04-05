// Import Mongoose module
const mongoose = require("mongoose");

// Define PostSchema using mongoose.Schema
const PostSchema = mongoose.Schema({
  // Define 'name' field in the schema
  name: {
    type: String, // Data type for 'name' field is String
    required: true, // 'name' field is required (mandatory)
  },
  // Define 'age' field in the schema
  age: {
    type: Number, // Data type for 'age' field is Number
    required: true, // 'age' field is required (mandatory)
  },
  // Define 'email' field in the schema
  email: {
    type: String, // Data type for 'email' field is String
    required: true, // 'email' field is required (mandatory)
  },
});

// Export the Mongoose model for the "Post" collection
module.exports = mongoose.model("Post", PostSchema);

/*
Mongoose Model Creation:
mongoose.model("Post", PostSchema): 
This line creates a Mongoose model for a MongoDB collection named "Post". 
It takes two parameters:

1. The first parameter is a string ("Post") representing the singular name of the collection. 
Mongoose will automatically pluralize this name when creating or querying the MongoDB collection. 
So, in MongoDB, the collection will be named "posts".

2. The second parameter (PostSchema) is the schema definition for the "Post" collection. 
PostSchema is typically defined elsewhere in the codebase and contains the structure and validation rules 
for documents in the "Post" collection.
*/
