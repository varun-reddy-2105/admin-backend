// controllers/enrollmentController.js
const Enrollment = require("../models/enrollment");

exports.createEnrollment = async (req, res) => {
  try {
    const newEnrollment = new Enrollment(req.body);
    await newEnrollment.save();
    res.status(201).json(newEnrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.status(200).json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Existing imports and methods above

// Delete enrollment by ID
exports.deleteEnrollment = async (req, res) => {
  try {
    await Enrollment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Enrollment deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

