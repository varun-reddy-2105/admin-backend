// models/ContactRequest.js
const mongoose = require("mongoose");

const contactRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  enquiryFor: { type: String, enum: ["Institute", "Services", "Partnership"], required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ContactRequest", contactRequestSchema);
