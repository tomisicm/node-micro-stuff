// sequelize db:migrate:undo --name 202003051440-create-books

module.exports.up = (queryInterface, DataTypes) => {

    return queryInterface.createTable(
        'books', 
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
            categoryId: {
                allowNull: false,
                type: DataTypes.UUID
            },
            author: {
                allowNull: true,
                type: DataTypes.STRING
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
            charset: 'utf8',
            timestamps: false
        }
    )
}

module.exports.down = queryInterface => queryInterface.dropTable('books')
