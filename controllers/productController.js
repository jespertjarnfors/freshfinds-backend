const Product = require("../models/product");

// Create a new product
const createProduct = (data, res) => {

  const productData = data; // Product data from the request body

  console.log(productData + " Hi");

  // Create a new product document
  const newProduct = new Product(productData);

  // Save the product to the database
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

// Get a list of all products
const getProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({ result: 200, data: products });
    })
    .catch((error) => {
      console.error("Error getting products:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Get a single product by ID
const getProductById = (req, res) => {
  const productId = req.params.id; // Product ID from request parameters

  Product.findById(productId)
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

// Update a product by ID
const updateProductById = (req, res) => {
  const productId = req.params.id; // Product ID from request parameters
  const updatedData = req.body; // Updated product data from request body

  Product.findByIdAndUpdate(productId, updatedData, { new: true })
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

// Delete a product by ID
const deleteProductById = (req, res) => {
  const productId = req.params.id; // Product ID from request parameters

  Product.findByIdAndRemove(productId)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        res.status(404).json({ result: 404, error: "Product not found" });
      } else {
        res.status(200).json({ result: 200, data: deletedProduct });
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
  updateProductById,
  deleteProductById,
};
