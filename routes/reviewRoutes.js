let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Retrieve a list of all reviews
router.get("/", (req, res) => {
  Controllers.reviewController.getReviews(res);
});

// Create a new review
router.post("/create", (req, res) => {
  Controllers.reviewController.createReview(req.body, res);
});

// Update an existing review by ID
router.put("/update/:id", (req, res) => {
  Controllers.reviewController.updateReviewById(req, res);
});

// Delete a review by ID
router.delete("/delete/:id", (req, res) => {
  Controllers.reviewController.deleteReviewById(req, res);
});

module.exports = router;
