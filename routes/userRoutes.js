let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.get('/cognito/:cognitoId', Controllers.userController.getUserByCognitoId);

// Get a user by username
router.get("/username/:username", (req, res) => {
  Controllers.userController.getUserByUsername(req, res);
});

router.get("/producers", (req, res) => {
  Controllers.userController.getProducers(res);
});

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