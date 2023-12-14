const Order = require("../models/order"); 

// Create a new order
const createOrder = (data, res) => {

  // console.log('Incoming data: ' + data);

  const orderData = data; // Order data from the request body

  // Create a new order document
  const newOrder = new Order(orderData);

  // Save the order to the database
  newOrder
    .save()
    .then((order) => {
      res.status(201).json({ result: 201, data: order });
    })
    .catch((error) => {
      console.error("Error creating order:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Get a list of all orders
const getOrders = (req, res) => {
  Order.find()
    .then((orders) => {
      res.status(200).json({ result: 200, data: orders });
    })
    .catch((error) => {
      console.error("Error getting orders:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Get a single order by ID
const getOrderById = (req, res) => {
  const orderId = req.params.id; // Order ID from request parameters

  Order.findById(orderId)
    .then((order) => {
      if (!order) {
        res.status(404).json({ result: 404, error: "Order not found" });
      } else {
        res.status(200).json({ result: 200, data: order });
      }
    })
    .catch((error) => {
      console.error("Error getting order by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Update an order by ID
const updateOrderById = (req, res) => {
  const orderId = req.params.id; // Order ID from request parameters
  const updatedData = req.body; // Updated order data from request body

  Order.findByIdAndUpdate(orderId, updatedData, { new: true })
    .then((updatedOrder) => {
      if (!updatedOrder) {
        res.status(404).json({ result: 404, error: "Order not found" });
      } else {
        res.status(200).json({ result: 200, data: updatedOrder });
      }
    })
    .catch((error) => {
      console.error("Error updating order by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

// Delete an order by ID
const deleteOrderById = (req, res) => {
  const orderId = req.params.id; // Order ID from request parameters

  Order.findByIdAndRemove(orderId)
    .then((deletedOrder) => {
      if (!deletedOrder) {
        res.status(404).json({ result: 404, error: "Order not found" });
      } else {
        res.status(200).json({ result: 200, data: deletedOrder });
      }
    })
    .catch((error) => {
      console.error("Error deleting order by ID:", error);
      res.status(500).json({ result: 500, error: error.message });
    });
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
