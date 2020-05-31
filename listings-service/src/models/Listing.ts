import { Column, DataType, Model, HasMany, Table } from 'sequelize-typescript'
import _ from 'lodash'
import { ListingBooks } from './ListingBooks'

export interface ListingAttributes {
	id?: number;
	title: string;
	description: string;
	createdBy?: string;
	bookIds?: ListingBooks[];
}

@Table({
	defaultScope: {},
	paranoid: true,
	tableName: 'listings',
	timestamps: true,
})
export class Listing extends Model<ListingAttributes, Listing> implements ListingAttributes {
	@Column({
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER.UNSIGNED,
	})
	id!: number | undefined;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	title!: string;

	@Column({
		allowNull: false,
		type: DataType.TEXT,
	})
	description!: string;

	@Column({
		allowNull: false,
		type: DataType.UUID,
	})
	createdBy!: string;

	@HasMany(() => ListingBooks, 'listingId')
	bookIds!: ListingBooks[];
}

// 	Listing.prototype.getAssociatedBooksIdsArray = function () {
// 		if (this.bookIds) {
// 			return this.bookIds.map(bookListing => {
// 				return bookListing.dataValues.id
// 			})
// 		}
// 	}

// 	Listing.prototype.updateAssociatedBooks = async function (bookIds) {
// 		const associatedBookIds = this.getAssociatedBooksIdsArray()

// 		const listingId = this.id
// 		const bookIdsToAdd = _.difference(bookIds, associatedBookIds)
// 		const bookIdsToRemove = _.difference(associatedBookIds, bookIds)

// 		try {
// 			await sequelize.models.ListingBooks.bulkCreate(
// 				bookIdsToAdd.map(bookId => ({
// 					listingId,
// 					bookId
// 				}))
// 			)
// 			await sequelize.models.ListingBooks.destroy({
// 				where: {
// 					bookId: bookIdsToRemove
// 				},
// 			})
// 			return this.reload()

// 		} catch (e) {
// 			console.log(e)
// 			throw e
// 		}
// 	}
