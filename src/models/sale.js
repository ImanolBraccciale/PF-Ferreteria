const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 const Sale= sequelize.define("Sale", {
    id: {
       type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
  return Sale
}
