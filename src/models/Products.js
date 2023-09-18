const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 const Products= sequelize.define('Products', {
    id: {
           type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    image:{
      type :DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    costoAnterior: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    costoActual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    stock: {
      type: DataTypes.INTEGER,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    TagId: {
   type: DataTypes.UUID, 
    allowNull: true, 
},


  },{timestamps: false});
return Products
};
