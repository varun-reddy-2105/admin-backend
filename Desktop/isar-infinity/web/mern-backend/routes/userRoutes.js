const express = require("express");
const { registerAdmin, loginAdmin } = require("../controllers/userController");

const router = express.Router();

// Register admin (optional for first setup)
router.post("/register", registerAdmin);

// Login admin
router.post("/login", loginAdmin);

module.exports = router;
