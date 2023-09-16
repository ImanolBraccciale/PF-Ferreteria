 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) =>{
  const Users = sequelize.define("Users",{
    id:{
       type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
        allowNull:false
    },
    rol:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  })
  return Users
}