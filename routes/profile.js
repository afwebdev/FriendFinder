const express = require("express");
const router = express.Router();
const Accounts = require("../models/Accounts");

// URL: host:port/profile
router.get("/", (req, resp) => {
	resp.render("profilePage", { layout: "profile" });
});

router.get("/api/user/:username", (req, resp) => {
	let username = req.params.username;
	Accounts.findOne({
		where: { username: username },
		attributes: ["username"]
	})
		.then(res => {
			resp.json(res);
		})
		.then(err => {});
});

router.get("/:username", (req, resp) => {
	let username = req.params.username;
	resp.render("profilePage", { layout: "profile" });
});

module.exports = router;
