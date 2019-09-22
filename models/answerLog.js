module.exports = (sequelizeConnection, DataTypes) => {
	var answerLog = sequelizeConnection.define(
		"answerLog",
		{
			username: {
				type: DataTypes.STRING
			},
			answer_1: {
				type: DataTypes.INTEGER
			},
			answer_2: {
				type: DataTypes.INTEGER
			},
			answer_3: {
				type: DataTypes.INTEGER
			},
			answer_4: {
				type: DataTypes.INTEGER
			},
			answer_5: {
				type: DataTypes.INTEGER
			},
			answer_6: {
				type: DataTypes.INTEGER
			},
			score: {
				type: DataTypes.INTEGER
			}
		},
		{ timestamps: false, freezeTableName: true }
	);
	return answerLog;
};
