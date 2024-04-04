const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const DBCONNECT =
  "mongodb+srv://<username>:<password>@<your-cluster-url>/<database>";

app.use(bodyParser.json());

mongoose
  .connect(DBCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Importing routes for posts
const postsRoute = require("./routes/posts");

// Mounting the posts route handler at the '/api/posts' path
app.use("/api/posts", postsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
