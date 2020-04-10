module.exports.up = (queryInterface, DataTypes) => {

    return queryInterface.createTable(
        'categories', 
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            }
        },
        {
            charset: 'utf8',
            tableName: 'categories',
            timestamps: false
        }
    )
}

module.exports.down = queryInterface => queryInterface.dropTable('categories')