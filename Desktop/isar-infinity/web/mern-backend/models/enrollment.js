// models/enrollment.js
const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  interestReason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
