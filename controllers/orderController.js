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

const createOrder = (data, res) => {
  //creates a new order using JSON data POSTed in request body
  console.log('Incoming data:', data);

  new Models.Order(data)
    .save()
    .then((createdOrder) => {
      console.log('Created order:', createdOrder);
      res.status(200).json({ result: 200, data: createdOrder });
    })
    .catch((err) => {
      console.error('Error creating order:', err);
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
  Models.Order.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
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
};
