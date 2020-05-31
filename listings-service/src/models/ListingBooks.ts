import { Column, DataType, Model, BelongsTo, Table } from 'sequelize-typescript'
import { Listing } from './Listing'

@Table({
	defaultScope: {

	},
	paranoid: true,
	tableName: 'listingBooks',
	timestamps: false
})
export class ListingBooks extends Model<ListingBooks> {
	@Column({
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER.UNSIGNED
	})
	id!: string;

	@Column({
		allowNull: false,
		type: DataType.INTEGER.UNSIGNED,
		references: {
			model: Listing,
			key: 'id'
		}
	})
	listingId!: string;

	@Column({
		allowNull: false,
		type: DataType.UUID
	})
	bookId!: string;

	@BelongsTo(() => Listing, 'listingId')
	listing!: Listing;
}
