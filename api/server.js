// BUILD YOUR SERVER HERE
const express = require("express");
const User = require("./users/model");

const server = express();

server.use(express.json());

server.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

server.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching all users",
      error: err.message,
    });
  }
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
