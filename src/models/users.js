 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) =>{
  sequelize.define("usuarios",{
    id:{
      type:DataTypes.SERIAL,
      primaryKey : true ,
    },
    email:{
      type:DataTypes.VARCHAR,
      allowNull:false
    },
    password:{
      type:DataTypes.VARCHAR,
        allowNull:false
    },
    rol:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    name:{
      type:DataTypes.VARCHAR,
      allowNull:false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  })
}