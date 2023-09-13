 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) =>{
  sequelize.define("detailSale",{
    id:{
      type:DataTypes.SERIAL,
      primaryKey : true ,
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
      price:{
        type:DataTypes.DECIMAL,
        allowNull:false
      }
  })
 }