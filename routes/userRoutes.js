let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
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

router.delete("/delete/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;