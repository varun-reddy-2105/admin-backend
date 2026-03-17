const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "uploads/others";

    if (req.originalUrl.includes("/gallery")) {
      folder = "uploads/gallery";
    } else if (req.originalUrl.includes("/jobs")) {
      folder = "uploads/resumes";
    }

    fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
module.exports = upload;
