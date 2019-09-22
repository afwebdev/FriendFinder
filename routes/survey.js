const express = require("express");
const router = express.Router();
const db = require("../config/database");
const questions = require("../models/question");
const answerLog = require("../models/answerLog");

//URL = localhost:8080/survey/
//get questions
router.get("/", (req, resp) => {
	questions
		.findAll()
		.then(question => {
			let questionArr = [];
			for (key of question) {
				questionArr.push(key.dataValues);
			}
			console.log(questionArr);
			resp.render("survey", { layout: "survey", questionArr });
		})
		.catch(err => {
			console.log(err);
			resp.send("404");
		});
});

//URL: localhost:8080/survey/submit
router.post("/submit", (req, resp) => {
	let { username, answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, score } = req.body;
	//Add above data to db.
	answerLog
		.create({
			username,
			answer_1,
			answer_2,
			answer_3,
			answer_4,
			answer_5,
			answer_6,
			score
		})
		.then(res => {
			resp.sendStatus(201);
			console.log(res.dataValues);
		})
		.catch(err => {
			resp.redirect("/");
			throw err;
		});
});

//URL = localhost:8080/survey/submit

module.exports = router;
