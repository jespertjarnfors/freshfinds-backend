let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Retrieve a list of all orders
router.get("/", (req, res) => {
  Controllers.orderController.getOrders(res);
});

router.get("/:id", (req, res) => {
  Controllers.orderController.getOrderById(req, res);
});

// Create a new order
router.post("/create", (req, res) => {
  Controllers.orderController.createOrder(req.body, res);
});

// Update an existing order by ID
router.put("/update/:id", (req, res) => {
  Controllers.orderController.updateOrderById(req, res);
});

// Delete an order by ID
router.delete("/delete/:id", (req, res) => {
  Controllers.orderController.deleteOrder(req, res);
});

module.exports = router;
