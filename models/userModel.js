const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "You must have an account"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "You must have a password"],
  },
  passwordConfirmation: {
    type: String,
    required: [true, "You must have a password confirmation"],
  },
  role: {
    type: String,
    enum: ["regularUser", "vipUser", "admin", "hotel"],
    default: "regularUser",
  },
  status: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("User", userSchema);
