import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Listing extends Model {}

Listing.init(
	{
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
	},
	{
		modelName: "listings",
		sequelize
	}
);

export class ListingBooks extends Model {}

ListingBooks.init(
	{
		listingId: {
			type: DataTypes.UUID,
			references: {
				model: Listing,
				key: 'id'
			}
		},
		bookId: {
			allowNull: false,
			type: DataTypes.UUID
		}
	},
	{
		modelName: "listingBooks",
		timestamps: false,
		sequelize
	}
)

Listing.hasMany(ListingBooks, 
	{
		as: 'bookIds'
	}
)

export default Listing;
