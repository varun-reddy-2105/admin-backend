const express = require("express");
const upload = require("../middleware/galleryUpload");

const Gallery = require("../models/Gallery");
const { verifyAdmin } = require("../middleware/authMiddleware");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, upload.single("image"), async (req, res) => {
  try {
    const gallery = await Gallery.create({
      title: req.body.title,
      category: req.body.category,
      image: `/uploads/gallery/${req.file.filename}`,
    });
    res.status(201).json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ (ADMIN + PUBLIC)
router.get("/", async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
});

// DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    // delete file
    const filePath = path.join(__dirname, "..", image.image);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await image.deleteOne();
    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
