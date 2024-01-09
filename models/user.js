const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  cognitoId: { type: String, trim: true, required: true, unique: true },
  username: { type: String, trim: true, required: true, unique: true },
  isProducer: { type: Boolean, required: true },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.methods.calculateAvgRating = async function() {
  const reviews = await mongoose.model('review').find({ targetUserId: this._id });
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return parseFloat((sum / reviews.length).toFixed(2));
};

module.exports = mongoose.model("user", userSchema);