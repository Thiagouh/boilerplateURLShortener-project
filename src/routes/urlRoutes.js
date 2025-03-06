const express = require("express");
const { createShortUrl, getShortUrl } = require("../controllers/urlController");

const router = express.Router();

router.post("/shorturl", createShortUrl);
router.get("/shorturl/:id", getShortUrl);

module.exports = router;
