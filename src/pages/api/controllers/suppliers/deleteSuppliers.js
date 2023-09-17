const { db } = require("../../db");
db.sequelize.sync();
const Suppliers = db.Suppliers;

module.exports = async (id) => {
  await Suppliers.destroy({
    where: {
      id: id,
    },
  });
};

// const deleteSuppliers = async (id, permanently) => {
//   const supplier = await Suppliers.findByPk(id);
//   if (!supplier) throw new Error("unknow Supplier");
//
//   return supplier;
// };

// export default deleteSuppliers;
