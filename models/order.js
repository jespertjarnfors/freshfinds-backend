const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  });
  
  const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    sellerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    orderDate: { type: Date, default: Date.now },
    orderStatus: { type: String, default: "Pending" },
  });
  
  module.exports = mongoose.model("Order", orderSchema);
