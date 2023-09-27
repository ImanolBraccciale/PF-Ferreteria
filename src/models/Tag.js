const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Tag = sequelize.define("Tag", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type:{
          type :DataTypes.ENUM , values:[ 'group', 'rubro']
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        },
    })
    return Tag
}