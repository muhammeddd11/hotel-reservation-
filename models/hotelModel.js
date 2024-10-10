const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please specify the name of your hotel"],
    trim: true,
  },
  location: String,
  photos: [String],
  rooms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    default: null,
  },
  rules: [String],
  averageRating: Number,
  ratingQuantity: Number,
});
module.exports = mongoose.model("Hotel", hotelSchema);
