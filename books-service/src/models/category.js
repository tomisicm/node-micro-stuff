module.exports = (sequelize, DataTypes) => {

	const Category = sequelize.define('Category', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING
		}
	}, {
		tableName: 'categories',
		modelName: 'categories',
		timestamps: false
    })

	return Category
}
