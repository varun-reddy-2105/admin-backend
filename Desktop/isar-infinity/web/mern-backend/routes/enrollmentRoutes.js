const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");

router.post("/", enrollmentController.createEnrollment);
router.get("/", enrollmentController.getEnrollments);

// Delete enrollment by ID
router.delete("/:id", enrollmentController.deleteEnrollment);

module.exports = router;
