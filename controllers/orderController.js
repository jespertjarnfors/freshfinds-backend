"use strict";
let Models = require("../models");

const getOrders = (res) => {
  //finds all orders
  Models.Order.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getOrderById = (req, res) => {
  Models.Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res.status(404).json({ result: 404, error: "Order not found" });
      }
      res.status(200).json({ result: 200, data: order });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const createOrder = (data, res) => {
  console.log('Incoming data:', data);

  // Check if data is an array
  if (!Array.isArray(data)) {
    // If not an array, convert it to an array
    data = [data];
  }

  Promise.all(data.map(orderData => {
    return new Models.Order(orderData).save();
  }))
  .then(createdOrders => {
    console.log('Created orders:', createdOrders);
    res.status(200).json({ result: 200, data: createdOrders });
  })
  .catch(err => {
    console.error('Error creating orders:', err);
    res.status(500).json({ result: 500, error: err.message });
  });
};

const updateOrder = (req, res) => {
  console.log(req.body);
  Models.Order.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((updatedOrder) => {
      if (!updatedOrder) {
        return res.status(404).json({ result: 404, error: "Order not found" });
      }
      res.status(200).json({ result: 200, data: updatedOrder });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const deleteOrder = (req, res) => {
  //deletes the order matching the ID from the param
  Models.Order.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    .then((data) => {
      res.send({ result: 200, message: 'Deleted order:', data: data })
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
};
