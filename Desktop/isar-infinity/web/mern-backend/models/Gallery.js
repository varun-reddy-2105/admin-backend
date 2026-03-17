const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: String,              // caption
    image: { type: String, required: true },
    category: {
      type: String,
      enum: ["Institute", "Designs", "3D Printers / Services"],
      required: true,
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);
