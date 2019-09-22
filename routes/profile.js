const express = require("express");
const router = express.Router();
const Accounts = require("../models/Accounts");
const AnswerLog = require("../models/answerLog");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// URL: host:port/profile
router.get("/", (req, resp) => {
	resp.render("profilePage", { layout: "profile" });
});

router.get("/api/user/:username", (req, resp) => {
	let username = req.params.username;
	AnswerLog.findOne({
		where: { username },
		attributes: ["username", "score"]
	})
		.then(res => {
			resp.json(res);
		})
		.then(err => {});
});

router.post("/api/match", (req, resp) => {
	let score = req.body.score;
	AnswerLog.findOne({
		where: {
			username: {
				[Op.notLike]: `%${req.body.username}`
			},
			score: {
				[Op.between]: [score - 5, score + 5]
			}
		}
	})
		.then(res => resp.json({ name: res.username, score: res.score }))
		.catch(err => {
			throw err;
		});
});

router.get("/:username", (req, resp) => {
	let username = req.params.username;
	resp.render("profilePage", { layout: "profile" });
});

module.exports = router;
