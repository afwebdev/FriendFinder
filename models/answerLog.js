const Sequelize = require("sequelize");
const db = require("../config/database");

module.exports = db.define(
	"answerLog",
	{
		username: {
			type: Sequelize.STRING
		},
		answer_1: {
			type: Sequelize.INTEGER
		},
		answer_2: {
			type: Sequelize.INTEGER
		},
		answer_3: {
			type: Sequelize.INTEGER
		},
		answer_4: {
			type: Sequelize.INTEGER
		},
		answer_5: {
			type: Sequelize.INTEGER
		},
		answer_6: {
			type: Sequelize.INTEGER
		},
		score: {
			type: Sequelize.INTEGER
		}
	},
	{ timestamps: false, freezeTableName: true }
);
