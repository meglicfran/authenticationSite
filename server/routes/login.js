const express = require("express");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const { loginValidation } = require("../validate");

router = express.Router();

// register validation
router.post("/", async (req, res) => {
  const vali = loginValidation(req.body);
  if (vali.error) {
    res.send(vali.error.details[0].message);
    return;
  }
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.send("Invalid username or password");
    return;
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    res.send("Invalid username or password");
    return;
  }
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send("Success");
});

//export the router
module.exports = router;
