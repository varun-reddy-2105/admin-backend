const express = require("express");
const router = express.Router();
const jobPostingController = require("../controllers/jobPostingController");
const { verifyAdmin } = require("../middleware/authMiddleware");

// POST /api/job-postings — admin only
router.post("/", verifyAdmin, jobPostingController.createJobPosting);

// GET /api/job-postings — public
router.get("/", jobPostingController.getAllJobPostings);

// GET /api/job-postings/:slug — public
router.get("/:slug", jobPostingController.getJobPostingBySlug);

// DELETE /api/job-postings/:id — admin only
router.delete("/:id", verifyAdmin, jobPostingController.deleteJobPosting);

module.exports = router;
