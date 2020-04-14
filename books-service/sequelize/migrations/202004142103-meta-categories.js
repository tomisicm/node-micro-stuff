module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        'metaBookCategories', 
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
            tableName: 'metaBookCategories',
            timestamps: false
        }
    )
}

module.exports.down = queryInterface => queryInterface.dropTable('metaBookCategories')
