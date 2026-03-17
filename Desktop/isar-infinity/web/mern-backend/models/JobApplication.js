const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  jobId: String,
  fullName: String,
  email: String,
  phone: String,
  experience: String,
  dob: Date,
  availability: Date,
  skills: String,
  queries: String,
  resumeUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
