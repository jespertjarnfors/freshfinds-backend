let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Retrieve a list of all reviews
router.get("/", Controllers.reviewController.getReviews);

// Retrieve a review by id
router.get("/:id", Controllers.reviewController.getReviewById);

// Retrieve a list of reviews by user ID
router.get("/user/:userId", Controllers.reviewController.getReviewsByUserId);

// Retrieve a review by order ID
router.get("/order/:orderId", Controllers.reviewController.getReviewByOrderId);

// Create a new review
router.post("/create", Controllers.reviewController.createReview);

// Update an existing review by ID
router.put("/update/:id", Controllers.reviewController.updateReviewById);

// Delete a review by ID
router.delete("/delete/:id", Controllers.reviewController.deleteReviewById);

module.exports = router;