const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true },
  productName: { type: String, required: true },
  image: { type: String, required: true }, // Assuming the image is stored as a URL or file path
  price: { type: Number, required: true },
  quantity: { type: Number, required: true},
  category: { type: String, required: true },
  deliveryMethod: {
    type: String,
    enum: ["Delivery", "Shipping", "Pick-up"],
    required: true,
  },
  location: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number], // Array of numbers for longitude and latitude
      required: true
    }
  }
});

// Geospatial index to allow searching by location
productSchema.index({ location: '2dsphere' });

module.exports = mongoose.model("product", productSchema);