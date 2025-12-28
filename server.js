const scrapeBlogs = require("./scraper/scrapeBlogs");

scrapeBlogs();


const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const articleRoutes = require("./routes/articleRoutes");
app.use("/api/articles", articleRoutes);
