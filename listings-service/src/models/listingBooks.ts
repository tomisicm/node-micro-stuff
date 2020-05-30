module.exports = (sequelize, DataTypes) => {

	const listingBooks = sequelize.define('ListingBooks', {
		listingId: {
			type: DataTypes.UUID,
			references: {
				model: sequelize.models.Listing,
				key: 'id'
			}
		},
		bookId: {
			allowNull: false,
			type: DataTypes.UUID
		}
	}, {
		tableName: 'listingBooks',
		modelName: 'listingBooks',
		timestamps: false
	})

	listingBooks.associate = function ( models ) {
		listingBooks.belongsTo(models.Listing,
			{
				as: 'listing'
			}
		)
	}

	return listingBooks
}
