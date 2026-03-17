/*const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

const createAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ email: "hr@isaar.in" });

    if (existingAdmin) {
      console.log("✅ Admin user already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("asdf1234", 10);

    const newAdmin = await Admin.create({
      email: "hr@isaar.in",
      password: hashedPassword,
      role: "admin",
    });

    console.log(" Default admin created:");
  } catch (error) {
    console.error("Error creating admin:", error.message);
  }
};

module.exports = createAdmin;
*/