const Gallery = require("../models/Gallery");

exports.addGalleryImage = async (req, res) => {
  try {
    const gallery = await Gallery.create({
      title: req.body.title,
      image: `/uploads/gallery/${req.file.filename}`,
    });

    res.status(201).json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find({ isActive: true }).sort({
      createdAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
