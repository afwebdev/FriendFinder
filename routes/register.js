const express = require("express");
const router = express.Router();
const db = require("../config/database");
//Table models
const Accounts = require("../models/Accounts");

const accountExists = async username => {
	let exists;
	await Accounts.findAll({ where: { username } }).then(res => {
		// console.log(res);
		// console.log(res.length);
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
					resp.json({ accountExists: false, loggedIn: true });
				})
				.catch(err => {
					throw err;
				});
		}
	});
});

module.exports = router;
