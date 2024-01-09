let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Retrieve a list of all reviews
router.get("/", Controllers.reviewController.getReviews);

// Create a new review
router.post("/create", Controllers.reviewController.createReview);

// Update an existing review by ID
router.put("/update/:id", Controllers.reviewController.updateReviewById);

// Delete a review by ID
router.delete("/delete/:id", Controllers.reviewController.deleteReviewById);

module.exports = router;