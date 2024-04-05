const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRoute = require("./routes/Post");

const app = express();
const PORT = 3000;
const DBCONNECT =
  "mongodb+srv://admin:Ramji_123@collegecluster.yd9dyhi.mongodb.net/";

app.use(bodyParser.json());

mongoose
  .connect(DBCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

// Mounting the posts route handler at the '/api/posts' path
app.use("/api/posts", postsRoute);
