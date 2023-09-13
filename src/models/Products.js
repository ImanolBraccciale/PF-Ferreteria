const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.SERIAL,
      allowNull: false,
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
      allowNull: false,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

  },{timestamps: false});
};
