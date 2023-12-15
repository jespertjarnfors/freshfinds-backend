"use strict";
let Models = require("../models");

const getUsers = (res) => {
  //finds all users
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log("Incoming data:", data);

  new Models.User(data)
    .save()
    .then((createdUser) => {
      console.log("Created user:", createdUser);
      res.status(200).json({ result: 200, data: createdUser });
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  console.log(req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ result: 404, error: "User not found" });
      }
      res.status(200).json({ result: 200, data: updatedUser });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  Models.User.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    .then((data) => res.send({ result: 200, message: "Deleted user", data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
