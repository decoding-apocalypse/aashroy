const express = require("express");
const router = express.Router();

router
  .route("/login")
  .get((req, res) => {
    res.render("users/login");
  })
  .post();

module.exports = router;
