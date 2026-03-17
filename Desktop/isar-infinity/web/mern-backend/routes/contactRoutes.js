// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/", contactController.createContactRequest);
router.get("/", contactController.getAllContactRequests);
router.delete('/:id', contactController.deleteContactRequest);


module.exports = router;
