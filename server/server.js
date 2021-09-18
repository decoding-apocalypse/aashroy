require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.port || 8800;

// Routes imports
const userRoutes = require("./routes/user");
const donationRoutes = require("./routes/donation");
const homelessRoutes = require("./routes/homeless");

mongoose
  .connect(
    `mongodb+srv://decodingApocalypse:${process.env.MONGODB_PASS}@aashroy.za9ce.mongodb.net/aashroy?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api/homeless", homelessRoutes);

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
