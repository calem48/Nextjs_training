const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please put a name"],
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, "please put a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please put a password"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
