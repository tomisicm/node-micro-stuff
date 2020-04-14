module.exports = (sequelize, DataTypes) => {

	const MetaBookCategory = sequelize.define('MetaBookCategory', {
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
		tableName: 'metaBookCategories',
		modelName: 'metaBookCategories',
		timestamps: false
    })

	return MetaBookCategory
}
