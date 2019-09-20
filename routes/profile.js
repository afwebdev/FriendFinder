const express = require("express");
const router = express.Router();

// URL: host:port/profile
router.get("/", (req, resp) => {
	resp.render("profilePage", { layout: "profile" });
});

module.exports = router;
