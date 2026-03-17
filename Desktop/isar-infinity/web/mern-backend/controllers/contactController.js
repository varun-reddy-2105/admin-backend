// controllers/contactController.js
const ContactRequest = require("../models/ContactRequest");

// Save new contact request
exports.createContactRequest = async (req, res) => {
  try {
    const newRequest = new ContactRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: "Request saved successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all contact requests (admin view)
exports.getAllContactRequests = async (req, res) => {
  try {
    const requests = await ContactRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteContactRequest = async (req, res) => {
  try {
    await ContactRequest.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact request deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
