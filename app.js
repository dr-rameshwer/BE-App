// Importing required modules and packages
const express = require("express"); // Import Express.js framework
const bodyParser = require("body-parser"); // Middleware for parsing request bodies
const mongoose = require("mongoose"); // Import Mongoose ORM for MongoDB
const postsRoute = require("./routes/Post"); // Importing custom route handler for posts

// Creating an Express application instance
const app = express();

// Defining the port number where the server will listen
const PORT = 3000;

// MongoDB connection string with the appropriate credentials and cluster URI
const DBCONNECT =
  "mongodb+srv://admin:Ramji_123@collegecluster.yd9dyhi.mongodb.net/";

// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

// Establishing connection to MongoDB server
mongoose
  .connect(DBCONNECT, {
    useNewUrlParser: true, // MongoDB driver's new URL parser
    useUnifiedTopology: true, // MongoDB driver's new Server Discovery and Monitoring engine
  })
  .then(() => {
    // If connection is successful, log a success message
    console.log("MongoDB connected");

    // Start the Express server and listen on the specified port
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err)); // If there's an error in connecting to MongoDB, log the error

// Mounting the posts route handler at the '/api/posts' path
app.use("/api/posts", postsRoute);
