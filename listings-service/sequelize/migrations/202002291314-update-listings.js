module.exports.up = (queryInterface, DataTypes) => {
	return queryInterface.addColumn(
		"listings",
		"createdBy",
		{
			allowNull: false,
			type: DataTypes.UUID
		},
		{
			charset: "utf8"
		}
	);
};

module.exports.down = (queryInterface, Sequelize) => {
	return queryInterface.sequelize.transaction(t => {
		return Promise.all([
			queryInterface.removeColumn("listings", "createdBy", { transaction: t })
		]);
	});
};
