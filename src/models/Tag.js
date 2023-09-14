const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Tag", {
        id: {
            type: DataTypes.SERIAL,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    })
}