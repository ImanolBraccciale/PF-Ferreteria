const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Users = sequelize.define("Users", {
    idUser: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    emailUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rolUser: {
      type: DataTypes.ENUM("admin","employee","client"),
      allowNull: false
    },
    nameUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActiveUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },{timestamps: false})
  return Users
}