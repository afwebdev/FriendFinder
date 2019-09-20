//ACCOUNT MODEL.
const Sequelize = require("sequelize");
const db = require("../config/database");

module.exports = db.define(
	"accounts",
	{
		username: Sequelize.STRING,
		password: Sequelize.STRING
	},
	{ freezeTableName: true }
);
