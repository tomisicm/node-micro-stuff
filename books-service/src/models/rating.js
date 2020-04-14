module.exports = (sequelize, DataTypes) => {

	const Rating = sequelize.define('Rating', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED
		},
		userId: {
			allowNull: false,
			type: DataTypes.STRING
        },
        bookId: {
			allowNull: false,
			type: DataTypes.STRING
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 10
            }
        }
	}, {
		tableName: 'ratings',
		modelName: 'ratings',
		timestamps: false
    })

	return Rating
}
