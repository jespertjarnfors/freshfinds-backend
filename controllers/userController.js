("use strict");
let Models = require("../models");
require('dotenv').config();
const AWS = require("aws-sdk");


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-southeast-2",
});
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

// Function to get user from Cognito
async function getCognitoUser(username) {
  console.log(username);
  const params = {
    UserPoolId: process.env.USER_POOL_ID, 
    Username: username,
  };

  const data = await cognitoidentityserviceprovider
    .adminGetUser(params)
    .promise();
  return data;
}

const getUsers = (res) => {
  //finds all users
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = async (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log("Incoming data:", data);

  try {
    const cognitoUser = await getCognitoUser(data.cognitoId);
    const latitude = cognitoUser.UserAttributes.find(
      (attr) => attr.Name === "custom:latitude"
    ).Value;
    const longitude = cognitoUser.UserAttributes.find(
      (attr) => attr.Name === "custom:longitude"
    ).Value;
    const isProducer = cognitoUser.UserAttributes.find(
      (attr) => attr.Name === "custom:isProducer"
    ).Value;
    const firstName = cognitoUser.UserAttributes.find(
      (attr) => attr.Name === "given_name"
    ).Value;
    const lastName = cognitoUser.UserAttributes.find(
      (attr) => attr.Name === "family_name"
    ).Value;
    const cognitoId = cognitoUser.UserAttributes.find(
      (attr) => attr.Name === "sub"
    ).Value;
    const username = cognitoUser.Username; // Added this line

    data.latitude = latitude;
    data.longitude = longitude;
    data.isProducer = isProducer;
    data.firstName = firstName;
    data.lastName = lastName;
    data.cognitoId = cognitoId;
    data.username = username; // Added this line

    const createdUser = await new Models.User(data).save();
    console.log("Created user:", createdUser);
    res.status(200).json({ result: 200, data: createdUser });
  } catch (err) {
    console.error("Error creating user:", err);
    console.log(err);
    res.status(500).json({ result: 500, error: err.message });
  }
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
    .then((data) =>
      res.send({ result: 200, message: "Deleted user", data: data })
    )
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
