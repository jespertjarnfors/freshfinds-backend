"use strict";
let Models = require("../models");

const createProduct = (data, res) => {
  const productData = data;
  const newProduct = new Models.Product(productData);

  newProduct
    .save()
    .then((product) => {
      res.status(201).json({ result: 201, data: product });
    })
    .catch((error) => {
      console.error("Error creating product:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

const getProducts = (res) => {
  Models.Product.find()
    .then((products) => {
      res.status(200).json({ result: 200, data: products });
    })
    .catch((error) => {
      console.error("Error getting products:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Function to get products based on user location and distance
const getProductsByDistance = async (req, res) => {
  const { lat, lng, distance } = req.query; // Get lat, lng, and distance from query parameters

  try {
    const products = await Models.Product.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [lng, lat] // longitude first, then latitude
          },
          $maxDistance: distance * 1000 // convert km to meters
        }
      }
    });

    res.status(200).json({
      status: 'success',
      data: products
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching products',
      error: error.message
    });
  }
};

const getProductById = (req, res) => {
  const productId = req.params.id;

  Models.Product.findById(productId)
    .then((product) => {
      if (!product) {
        res.status(404).json({ result: 404, error: "Product not found" });
      } else {
        res.status(200).json({ result: 200, data: product });
      }
    })
    .catch((error) => {
      console.error("Error getting product by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

const updateProductById = (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  Models.Product.findByIdAndUpdate(productId, updatedData, { new: true })
    .then((updatedProduct) => {
      if (!updatedProduct) {
        res.status(404).json({ result: 404, error: "Product not found" });
      } else {
        res.status(200).json({ result: 200, data: updatedProduct });
      }
    })
    .catch((error) => {
      console.error("Error updating product by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

const deleteProductById = (req, res) => {
  const productId = req.params.id;

  Models.Product.findByIdAndDelete(productId)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        res.status(404).json({ result: 404, error: "Product not found" });
      } else {
        res.status(200).json({ result: 200, message: "Deleted product:", data: deletedProduct });
      }
    })
    .catch((error) => {
      console.error("Error deleting product by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductsByDistance,
  updateProductById,
  deleteProductById,
};
