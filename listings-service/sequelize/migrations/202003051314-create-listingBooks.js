module.exports.up = (queryInterface, DataTypes) => {

	return queryInterface.createTable(
		'listingBooks', 
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			listingId: {
				allowNull: false,
				type: DataTypes.UUID
			},
			bookId: {
				allowNull: false,
				type: DataTypes.UUID
			}
		},
		{
			charset: 'utf8'
		}
	)
}

module.exports.down = queryInterface => queryInterface.dropTable('listingBooks')
