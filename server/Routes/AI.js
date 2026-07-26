const express = require("express");
const router = express.Router();
const { generateContent } = require("../Controllers/AI");
const { auth } = require("../Middlewares/auth");

router.post("/generate", auth, generateContent);

module.exports = router;
