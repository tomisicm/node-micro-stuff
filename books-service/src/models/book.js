import _ from 'lodash'

module.exports = (sequelize, DataTypes) => {

	const Book = sequelize.define('Book', {
		id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        title: {
			allowNull: false,
			type: DataTypes.STRING
        },
        categoryId : {
            type: DataTypes.UUID,
            references: {
              model: sequelize.models.Category,
              key: 'id'
            }
        },
        author: {
			allowNull: true,
			type: DataTypes.STRING
        },
        createdBy: {
			allowNull: false,
			type: DataTypes.UUID
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
	}, {
		tableName: "books",
		modelName: "books",
		timestamps: true
	});

	

	
	return Book;
}
