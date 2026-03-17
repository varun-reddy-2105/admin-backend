const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB:', process.env.MONGO_URI); // Debug print!
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connection established!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
