 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) =>{
  sequelize.define("usuarios",{
    id:{
      type:DataTypes.SERIAL,
      primaryKey : true ,
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
}