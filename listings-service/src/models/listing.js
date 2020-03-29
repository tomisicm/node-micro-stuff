import _ from 'lodash'

module.exports = (sequelize, DataTypes) => {

	const Listing = sequelize.define('Listing', {
		title: {
			allowNull: false,
			type: DataTypes.STRING
		},
		description: {
			allowNull: false,
			type: DataTypes.TEXT
		},
		createdBy: {
			allowNull: false,
			type: DataTypes.UUID
		}
	}, {
		tableName: "listings",
		modelName: "listings",
		timestamps: true
	});

	Listing.prototype.getAssociatedBooksIdsArray = function () {
		if (this.bookIds) {
			return this.bookIds.map(bookListing => {
				return bookListing.dataValues.id
			})
		}
	}

	Listing.prototype.updateAssociatedBooks = async function (bookIds) {
		const associatedBookIds = this.getAssociatedBooksIdsArray()
		
		const listingId = this.id
		const bookIdsToAdd = _.difference(bookIds, associatedBookIds)
		const bookIdsToRemove = _.difference(associatedBookIds, bookIds)

		try {
			await sequelize.models.ListingBooks.bulkCreate(
				bookIdsToAdd.map(bookId => ({
					listingId,
					bookId
				}))
			)
			await sequelize.models.ListingBooks.destroy({
				where: {
					bookId: bookIdsToRemove
				},
			})
			return this.reload()

		} catch (e) {
			console.log(e)
			throw e
		}
	}

	Listing.associate = function ( models ) {

		Listing.hasMany(models.ListingBooks,
			{
				as: 'bookIds'
			}
		)
	};
	
	return Listing;
}
