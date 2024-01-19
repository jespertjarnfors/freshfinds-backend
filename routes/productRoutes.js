let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Retrieve a list of all products
router.get("/", (req, res) => {
  Controllers.productController.getProducts(res);
});

// Route to get products by distance
router.get('/distance', Controllers.productController.getProductsByDistance);

// Route to get product by Id
router.get('/:id', Controllers.productController.getProductById);

// Create a new product
router.post("/create", (req, res) => {
  Controllers.productController.createProduct(req.body, res);
});

// Update an existing product by ID
router.put("/update/:id", (req, res) => {
  Controllers.productController.updateProductById(req, res);
});

// Delete a product by ID
router.delete("/delete/:id", (req, res) => {
  Controllers.productController.deleteProductById(req, res);
});

module.exports = router;
