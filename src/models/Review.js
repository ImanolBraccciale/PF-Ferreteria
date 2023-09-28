const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define("Review", {
        idReview: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        review: {
            type: DataTypes.ENUM(1,2,3,4,5),
            allowNull: false
        }
    }, { timestamps: false })
    return Users
}