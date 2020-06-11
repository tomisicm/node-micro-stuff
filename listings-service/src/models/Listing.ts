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
// TODO: whats the benefit of this line?
export interface ListingModel extends Model<ListingAttributes, ListingAttributes>  {
	updateAssociatedBooks: () => Listing
}
@Table({
	defaultScope: {},
	paranoid: true,
	tableName: 'listings',
	timestamps: true,
})
export class Listing extends Model<ListingModel, ListingAttributes> implements ListingAttributes {
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

	async updateAssociatedBooks(bookIds: []) {
		const associatedBookIds = this.getAssociatedBooksIdsArray()

		const listingId = this.id
		const bookIdsToAdd = _.difference(bookIds, associatedBookIds)
		const bookIdsToRemove = _.difference(associatedBookIds, bookIds)

		try {
			await ListingBooks.bulkCreate(
				bookIdsToAdd.map(bookId => ({
					listingId,
					bookId
				}))
			)
			await ListingBooks.destroy({
				where: {
					bookId: bookIdsToRemove
				}
			})

		} catch (e) {
			console.log(e)
			throw e
		}
	}

	getAssociatedBooksIdsArray() {
		if (this.bookIds.length) {
			return this.bookIds.map(bookListing => {
				return bookListing.id
			})
		} else {
			return []
		}
	}
}
