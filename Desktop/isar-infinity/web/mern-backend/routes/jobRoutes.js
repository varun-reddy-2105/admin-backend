const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const upload = require('../middleware/uploadMiddleware');

// POST /api/apply
router.post('/apply', upload.single('resume'), jobController.applyJob);

// GET /api/applications
router.get('/applications', jobController.getAllApplications);

// DELETE /api/applications/:id
router.delete('/applications/:id', jobController.deleteApplication);

module.exports = router;
