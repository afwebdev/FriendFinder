const express = require("express");
const router = express.Router();
//Table models
const Accounts = require("../models/Accounts");

const accountExists = async username => {
	let exists;
	await Accounts.findAll({ where: { username } }).then(res => {
		exists = res.length > 1 ? true : false;
	});
	return exists;
};

//URL : localhost:8081/register
router.get("/", (req, resp) => {
	resp.render("registerPage", { layout: "register" });
});

router.post("/submit", (req, resp) => {
	let { username, password } = req.body;
	accountExists(username).then(res => {
		if (res) {
			resp.json({ accountExists: true, loggedIn: false });
		} else {
			Accounts.create({ username, password })
				.then(res => {
					resp.json({ accountExists: false, loggedIn: true, username });
				})
				.catch(err => {
					throw err;
				});
		}
	});
});

module.exports = router;
