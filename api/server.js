// BUILD YOUR SERVER HERE
const express = require("express");
const User = require("./users/model");

const server = express();

server.use(express.json());

server.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

//GET all users
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

//GET user by id

server.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: "The user with the specified ID does not exist",
      });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({
      message: "The user information could not be retrieved",
      error: err.message,
    });
  }
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
