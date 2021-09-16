require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://decodingApocalypse:${process.env.MONGODB_PASS}@aashroy.za9ce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
const userRoutes = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
