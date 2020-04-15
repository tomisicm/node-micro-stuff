module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        'metadata-categories', 
        {
            categoryId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: 'categories'
                    },
                    key: 'id'
                }
            },
            totalCount: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            relativeFrequency: {
                allowNull: false,
                type: DataTypes.DOUBLE
            }
        },
        {
            charset: 'utf8',
            tableName: 'metadata-categories',
            timestamps: false
        }
    )
}

module.exports.down = queryInterface => queryInterface.dropTable('metadata-categories')
