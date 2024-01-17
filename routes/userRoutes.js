let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Route to get user by id from MongoDB
router.get("/:id", (req, res) => {
  Controllers.userController.getUserById(req, res);
});

// Route to get user by Cognito ID from MongoDB
router.get('/cognito/:cognitoId', Controllers.userController.getUserByCognitoId);

// Route to get user by username from MongoDB
router.get("/username/:username", (req, res) => {
  Controllers.userController.getUserByUsername(req, res);
});

router.get("/producers", (req, res) => {
  Controllers.userController.getProducers(res);
});

// Route to get average rating for a user
router.get("/:id/average-rating", (req, res) => {
  Controllers.userController.getUserAverageRating(req, res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.put('/cognito/update/:cognitoId', Controllers.userController.updateUserByCognitoId);

router.delete("/delete/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;