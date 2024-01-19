"use strict";
let Models = require("../models");

const createReview = (req, res) => {
  const reviewData = req.body;
  const newReview = new Models.Review(reviewData);

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

const getReviews = (req, res) => {
  Models.Review.find()
    .then((reviews) => {
      res.status(200).json({ result: 200, data: reviews });
    })
    .catch((error) => {
      console.error("Error getting reviews:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

const getReviewById = (req, res) => {
  const reviewId = req.params.id;

  Models.Review.findById(reviewId)
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

// Function to get reviews by userId
const getReviewsByUserId = (req, res) => {
  const userId = req.params.userId;

  Models.Review.find({ userId: userId })
    .then((reviews) => {
      if (!reviews) {
        return res
          .status(404)
          .json({ result: 404, message: "Reviews not found" });
      }
      res.status(200).json({ result: 200, data: reviews });
    })
    .catch((err) => {
      console.error("Error getting reviews by user ID:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

// Function to get a review by order ID from MongoDB
const getReviewByOrderId = (req, res) => {
  const orderId = req.params.orderId;

  Models.Review.findOne({ orderId: orderId })
    .then((review) => {
      if (!review) {
        return res.status(404).json({ result: 404, message: "Review not found" });
      }
      res.status(200).json({ result: 200, data: review });
    })
    .catch((err) => {
      console.error("Error getting review by order ID:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};


const updateReviewById = (req, res) => {
  const reviewId = req.params.id;
  const updatedData = req.body;

  Models.Review.findByIdAndUpdate(reviewId, updatedData, { new: true })
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

const deleteReviewById = (req, res) => {
  const reviewId = req.params.id;

  Models.Review.findByIdAndDelete(reviewId)
    .then((deletedReview) => {
      if (!deletedReview) {
        res.status(404).json({ result: 404, error: "Review not found" });
      } else {
        res
          .status(200)
          .json({
            result: 200,
            message: "Deleted review:",
            data: deletedReview,
          });
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
  getReviewsByUserId,
  getReviewByOrderId,
  updateReviewById,
  deleteReviewById,
};
