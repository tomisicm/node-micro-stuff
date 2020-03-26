import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Book extends Model {}

Book.init(
    {
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
    },
	{
		modelName: "books",
		sequelize
	}
);

export default Book;