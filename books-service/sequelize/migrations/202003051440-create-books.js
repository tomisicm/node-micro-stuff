module.exports.up = (queryInterface, DataTypes) => {

    return queryInterface.createTable(
        "books", 
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
            charset: "utf8",
            timestamps: false
        }
    );
};

module.exports.down = queryInterface => queryInterface.dropTable("books");