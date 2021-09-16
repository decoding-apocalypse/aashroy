const express = require("express");
const router = express.Router();
const User = require("../models/User");

router
  .route("/")
  // Get Route
  .get(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
  // Post Route
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const username = email.split("@")[0];
    const user = await new User({
      name,
      email,
      password,
      username,
    });
    await user.save();
    res.status(200).send("Data added");
  });

module.exports = router;
