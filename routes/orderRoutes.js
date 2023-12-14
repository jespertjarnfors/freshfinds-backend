let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Retrieve a list of all orders
router.get("/", (req, res) => {
  Controllers.orderController.getOrders(res);
});

// Create a new order
router.post("/create", (req, res) => {
  Controllers.orderController.createOrder(req.body, res);
});

// Update an existing order by ID
router.put("/:id", (req, res) => {
  Controllers.orderController.updateOrderById(req, res);
});

// Delete an order by ID
router.delete("/:id", (req, res) => {
  Controllers.orderController.deleteOrderById(req, res);
});

module.exports = router;
