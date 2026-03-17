const Course = require("../models/Course");
const fs = require("fs");
const path = require("path");

// CREATE — admin only
exports.createCourse = async (req, res) => {
    try {
        const {
            title,
            duration,
            fee,
            certification,
            eligibility,
            lessons,
            students,
            description,
        } = req.body;

        const image = req.file ? `/uploads/courses/${req.file.filename}` : "";

        const course = await Course.create({
            title,
            duration,
            fee,
            certification,
            eligibility,
            lessons: Number(lessons) || 0,
            students: Number(students) || 0,
            image,
            description,
        });

        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL — public
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isActive: true }).sort({
            createdAt: -1,
        });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET BY SLUG — public
exports.getCourseBySlug = async (req, res) => {
    try {
        const course = await Course.findOne({
            slug: req.params.slug,
            isActive: true,
        });
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE — admin only
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });

        // Delete associated image file
        if (course.image) {
            const filePath = path.join(__dirname, "..", course.image);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }

        await course.deleteOne();
        res.json({ message: "Course deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
