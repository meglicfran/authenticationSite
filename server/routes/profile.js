const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const dotenv = require('dotenv');
router = express.Router();

router.post('/', async (req, res) => {
  const authToken = req.body.token;
  //console.log(authToken);
  if (authToken == null) {
    res.end();
    return;
  }
  var decoded = jwt.verify(authToken, process.env.TOKEN_SECRET);
  //console.log(decoded._id);
  const user = await User.findOne({ _id: decoded._id });
  res.send(user);
});

module.exports = router;
