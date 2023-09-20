const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
<<<<<<< HEAD
  // Definimos el modelo Products
=======
  // defino el modelo
>>>>>>> 9949d98c7eb97afc3ca6290f7a09a7d80d124dc3
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
<<<<<<< HEAD
=======

>>>>>>> 9949d98c7eb97afc3ca6290f7a09a7d80d124dc3
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
<<<<<<< HEAD
=======

>>>>>>> 9949d98c7eb97afc3ca6290f7a09a7d80d124dc3
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
      defaultValue: true,
    },
<<<<<<< HEAD
  }, { timestamps: false });


  return Products;
=======
    TagId: {
      type: DataTypes.UUID,
      allowNull: true,
    },


  }, { timestamps: false });
  return Products
>>>>>>> 9949d98c7eb97afc3ca6290f7a09a7d80d124dc3
};
