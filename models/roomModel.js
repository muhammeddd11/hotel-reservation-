const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: [true, "The room must have a price"],
  },
  beds: {
    type: Number,
    default: 1,
  },
  type: {
    type: String,
    enum: ["Single room", "Double room", "Triple room", "Suite"],
    default: "Single room",
  },
  discount: Number,
  program: {
    type: String,
    required: [true, "Every room should have a program"],
    enum: ["Bed and Breakfast", "Half Board", "Full Board"],
  },
});
module.exports = mongoose.model("Room", roomSchema);
