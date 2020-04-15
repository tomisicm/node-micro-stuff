module.exports = (sequelize, DataTypes) => {

	const CategoryMetadata = sequelize.define('CategoryMetadata', {
		categoryId: {
			type: DataTypes.INTEGER.UNSIGNED,
			references: {
				model: sequelize.models.Category,
				key: 'id'
			}
        },
        totalCount: {
			allowNull: false,
			type: DataTypes.INTEGER
        },
        relativeFrequency: {
			allowNull: false,
			type: DataTypes.DOUBLE
        }
	}, {
		tableName: 'metadata-categories',
		modelName: 'metadata-categories',
		timestamps: false
	})

	CategoryMetadata.removeAttribute('id')

	CategoryMetadata.belongsTo(sequelize.models.Category, { through: 'categories', foreignKey: 'categoryId' })

	return CategoryMetadata
}
