const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    return res
      .status(500)
      .json({ message: "User already exist, please signup" });
  }
  const username = email.split("@")[0];
  try {
    // hash the password and store
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      username,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email not in our records" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }

    return res.status(200).json({
      ...user.toJSON(),
    }); // Must never use the ._doc property
    // {
    //   ...user,
    //   succesfull: true,
    //   message: "Congratulations you are logged in",
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
