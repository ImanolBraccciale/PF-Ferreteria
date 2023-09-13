const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("sale", {
    id: {
      type: DataTypes.SERIAL,
      primaryKey: true,
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    timestamps: true
  });
}
