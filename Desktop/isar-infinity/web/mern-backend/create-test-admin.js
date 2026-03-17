require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

const createTestAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    const email = "testadmin@example.com";
    const password = "password123";

    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("Admin already exists. Credentials:");
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, password: hashedPassword });
    
    console.log("Test Admin created successfully!");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    process.exit();
  } catch (error) {
    console.error("Error creating test admin:", error.message);
    process.exit(1);
  }
};

createTestAdmin();
