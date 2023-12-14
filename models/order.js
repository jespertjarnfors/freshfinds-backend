const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    orderDate: { type: Date, default: Date.now},
    orderStatus: { type: String, default: "Pending" },
})

module.exports = mongoose.model("order", orderSchema);