const Review = require("../models/review");

// Create a new review
const createReview = (req, res) => {
  const reviewData = req.body; // Review data from the request body

  // Create a new review document
  const newReview = new Review(reviewData);

  // Save the review to the database
  newReview
    .save()
    .then((review) => {
      res.status(201).json({ result: 201, data: review });
    })
    .catch((error) => {
      console.error("Error creating review:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Get a list of all reviews
const getReviews = (req, res) => {
  Review.find()
    .then((reviews) => {
      res.status(200).json({ result: 200, data: reviews });
    })
    .catch((error) => {
      console.error("Error getting reviews:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Get a single review by ID
const getReviewById = (req, res) => {
  const reviewId = req.params.id; // Review ID from request parameters

  Review.findById(reviewId)
    .then((review) => {
      if (!review) {
        res.status(404).json({ result: 404, error: "Review not found" });
      } else {
        res.status(200).json({ result: 200, data: review });
      }
    })
    .catch((error) => {
      console.error("Error getting review by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Update a review by ID
const updateReviewById = (req, res) => {
  const reviewId = req.params.id; // Review ID from request parameters
  const updatedData = req.body; // Updated review data from request body

  Review.findByIdAndUpdate(reviewId, updatedData, { new: true })
    .then((updatedReview) => {
      if (!updatedReview) {
        res.status(404).json({ result: 404, error: "Review not found" });
      } else {
        res.status(200).json({ result: 200, data: updatedReview });
      }
    })
    .catch((error) => {
      console.error("Error updating review by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Delete a review by ID
const deleteReviewById = (req, res) => {
  const reviewId = req.params.id; // Review ID from request parameters

  Review.findByIdAndRemove(reviewId)
    .then((deletedReview) => {
      if (!deletedReview) {
        res.status(404).json({ result: 404, error: "Review not found" });
      } else {
        res.status(200).json({ result: 200, data: deletedReview });
      }
    })
    .catch((error) => {
      console.error("Error deleting review by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
