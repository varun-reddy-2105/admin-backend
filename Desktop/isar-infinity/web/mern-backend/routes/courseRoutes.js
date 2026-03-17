const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const courseUpload = require("../middleware/courseUpload");
const { verifyAdmin } = require("../middleware/authMiddleware");

// POST /api/courses — admin only (with image upload)
router.post("/", verifyAdmin, courseUpload.single("image"), courseController.createCourse);

// GET /api/courses — public
router.get("/", courseController.getAllCourses);

// GET /api/courses/:slug — public
router.get("/:slug", courseController.getCourseBySlug);

// DELETE /api/courses/:id — admin only
router.delete("/:id", verifyAdmin, courseController.deleteCourse);

module.exports = router;
