const express = require("express");
const router = express.Router();
const controller = require("../controllers/aboutController");

router.get("/about", controller.about)

module.exports = router;