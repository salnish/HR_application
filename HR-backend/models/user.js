const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    empId: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
      required: [true, "Please add phone number"],
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
