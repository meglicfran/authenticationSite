const express = require("express");
const register = require("./routes/register");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
app = express();
dotenv.config();
//connect to the database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("connected to DB.");
});
//convert request to json object
app.use(express.json());

//middleware
app.use("/register", register);

//create a server on port 5000
app.listen(5000, () => {
  console.log("Server is up!");
});
