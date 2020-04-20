module.exports.up = (queryInterface, DataTypes) => {

    return queryInterface.createTable(
        'ratings', 
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            userId: {
                allowNull: false,
                type: DataTypes.UUID
            },
            bookId: {
                type: DataTypes.UUID,
                references: {
                    model: {
                        tableName: 'books'
                    },
                    key: 'id'
                },
                allowNull: false
            },
            categoryId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: 'categories'
                    },
                    key: 'id'
                },
                allowNull: false
            },
            value: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    min: 0,
                    max: 10
                }
            }
        },
        {
            charset: 'utf8',
            tableName: 'ratings',
            timestamps: false
        }
    )
}

module.exports.down = queryInterface => queryInterface.dropTable('ratings')
