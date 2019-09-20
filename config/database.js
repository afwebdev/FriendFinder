const Sequelize = require("sequelize");

module.exports = new Sequelize("friendfinder", "root", "andrew123", {
	host: "localhost",
	dialect: "mysql"
});
