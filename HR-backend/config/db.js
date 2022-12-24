const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected :${connect.connection.host}`);
  } catch (error) {
    console.log(`MongoDB not connected ${error}`);
  }
};

module.exports = connectDB;
