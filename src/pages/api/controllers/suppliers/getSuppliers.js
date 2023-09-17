const { db } = require("../../db");
db.sequelize.sync();
const Suppliers = db.Suppliers;

module.exports = async () => {
  return await Suppliers.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};

//export default getSuppliers;
