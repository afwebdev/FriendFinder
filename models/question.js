module.exports = (sequelizeConnection, DataTypes) => {
	var questionBank = sequelizeConnection.define(
		"questionBank",
		{
			question: {
				type: DataTypes.TEXT
			},
			answer_1: {
				type: DataTypes.TEXT
			},
			answer_2: {
				type: DataTypes.TEXT
			},
			answer_3: {
				type: DataTypes.TEXT
			},
			answer_4: {
				type: DataTypes.TEXT
			}
		},
		{ timestamps: false, freezeTableName: true }
	);
	return questionBank;
};
