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

export default Listing;
