const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const Router = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ketkidb");

app.listen(4000, () => {
  console.log("server is running ");
});

app.use('/users',Router);

app.get('/hello', (req, res) => {
    res.send("Hello");
});
