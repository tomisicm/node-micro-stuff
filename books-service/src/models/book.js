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
        authorId: {
			allowNull: true,
			type: DataTypes.UUID
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
