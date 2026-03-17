const JobApplication = require('../models/JobApplication');

exports.applyJob = async (req, res) => {
  try {
    const { jobId, fullName, email, phone, experience, dob, availability, skills, queries } = req.body;
    const resumeUrl = req.file ? req.file.path : '';
    const newApplication = new JobApplication({ jobId, fullName, email, phone, experience, dob, availability, skills, queries, resumeUrl });
    await newApplication.save();
    res.json({ message: 'Application submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application.' });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications.' });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    await JobApplication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Application deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting application.' });
  }
};
