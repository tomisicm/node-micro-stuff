module.exports.up = (queryInterface, DataTypes) => {

    return queryInterface.createTable(
        'users', 
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
            },
            passwordHash: {
                allowNull: false,
                type: DataTypes.CHAR(64)
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE,
                defaultValue: null
            }
        },
        {
            timestamps: true,
            charset: 'utf8'
        }
    )
}

module.exports.down = queryInterface => queryInterface.dropTable('users')
