const mongoose = require("mongoose");

const jobPostingSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        shortDescription: { type: String, default: "" },
        descriptionHtml: { type: String, default: "" }, // Full HTML for job details
        location: { type: String, default: "" },
        experience: { type: String, default: "" },
        workingHours: { type: String, default: "" },
        salary: { type: String, default: "" },
        openings: { type: Number, default: 1 },
        department: { type: String, default: "" },
        accommodation: { type: String, default: "" },
        jobType: { type: String, default: "Full-Time" },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

// Auto-generate slug from title before validation
jobPostingSchema.pre("validate", function (next) {
    if (this.title && !this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    }
    next();
});

module.exports = mongoose.model("JobPosting", jobPostingSchema);
