const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    targetUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true, unique: true }, // orderId needs to be unique
    rating: { type: Number, required: true },
    reviewText: { type: String, trim: true },
    status: { type: String, enum: ["pending", "submitted"], default: "pending" }
});

module.exports = mongoose.model("Review", reviewSchema);
