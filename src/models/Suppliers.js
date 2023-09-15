const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
<<<<<<< HEAD
  const Suppliers = sequelize.define(
    "suppliers",
    {
      id_suppliers: {
        type: DataTypes.SERIAL,
        allowNull: false,
      },
=======
 const Suppliers= sequelize.define('Suppliers', {
    id_suppliers: {
         type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
>>>>>>> origin/Products

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

      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
<<<<<<< HEAD
    { timestamps: false }
  );
  return Suppliers;
=======

  },{timestamps: false});
  return Suppliers
>>>>>>> origin/Products
};
