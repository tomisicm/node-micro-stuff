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

	Listing.associate = function ( models ) {

		Listing.hasMany(models.ListingBooks,
			{
				as: 'bookIds'
			}
		)
	};
	
	return Listing;
}
