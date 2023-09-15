 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) =>{
  const DetailSale =sequelize.define("DetailSale",{
    id:{
       type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
  return DetailSale
 }
 