const JobPosting = require("../models/JobPosting");

// CREATE — admin only
exports.createJobPosting = async (req, res) => {
    try {
        const {
            title,
            shortDescription,
            descriptionHtml,
            location,
            experience,
            workingHours,
            salary,
            openings,
            department,
            accommodation,
            jobType,
        } = req.body;

        const jobPosting = await JobPosting.create({
            title,
            shortDescription,
            descriptionHtml,
            location,
            experience,
            workingHours,
            salary,
            openings: Number(openings) || 1,
            department,
            accommodation,
            jobType,
        });

        res.status(201).json(jobPosting);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL — public
exports.getAllJobPostings = async (req, res) => {
    try {
        const postings = await JobPosting.find({ isActive: true }).sort({
            createdAt: -1,
        });
        res.json(postings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET BY SLUG — public
exports.getJobPostingBySlug = async (req, res) => {
    try {
        const posting = await JobPosting.findOne({
            slug: req.params.slug,
            isActive: true,
        });
        if (!posting)
            return res.status(404).json({ message: "Job posting not found" });
        res.json(posting);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE — admin only
exports.deleteJobPosting = async (req, res) => {
    try {
        const posting = await JobPosting.findById(req.params.id);
        if (!posting)
            return res.status(404).json({ message: "Job posting not found" });

        await posting.deleteOne();
        res.json({ message: "Job posting deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
