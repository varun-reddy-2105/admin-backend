require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const galleryRoutes = require("./routes/galleryRoutes"); // ✅ NEW
const courseRoutes = require("./routes/courseRoutes");
const jobPostingRoutes = require("./routes/jobPostingRoutes");

const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", jobRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", userRoutes);
app.use("/api/gallery", galleryRoutes); // ✅ NEW
app.use("/api/courses", courseRoutes);
app.use("/api/job-postings", jobPostingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
