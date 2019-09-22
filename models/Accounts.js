module.exports = (SequelizeConnection, DataTypes) => {
	var Account = SequelizeConnection.define(
		"accounts",
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING
		},
		{ freezeTableName: true }
	);
	return Account;
};
