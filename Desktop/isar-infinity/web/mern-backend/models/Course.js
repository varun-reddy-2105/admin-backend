const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    duration: { type: String, default: "N/A" },
    fee: { type: String, default: "" },
    certification: { type: String, default: "Yes" },
    eligibility: { type: String, default: "Any UG" },
    lessons: { type: Number, default: 0 },
    students: { type: Number, default: 0 },
    image: { type: String, default: "" },
    description: { type: String, default: "" }, // HTML string
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Auto-generate slug from title before validation
courseSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

module.exports = mongoose.model("Course", courseSchema);
