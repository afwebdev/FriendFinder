const Sequelize = require("sequelize");
const db = require("../config/database");

module.exports = db.define(
	"questionBank",
	{
		question: {
			type: Sequelize.TEXT
		},
		answer_1: {
			type: Sequelize.TEXT
		},
		answer_2: {
			type: Sequelize.TEXT
		},
		answer_3: {
			type: Sequelize.TEXT
		},
		answer_4: {
			type: Sequelize.TEXT
		}
	},
	{ timestamps: false, freezeTableName: true }
);
