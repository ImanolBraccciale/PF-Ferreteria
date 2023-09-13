const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('suppliers', {
    id_suppliers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },{timestamps: false});
};
