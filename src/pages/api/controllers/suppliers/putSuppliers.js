const { db } = require("../../db");
db.sequelize.sync();
const Suppliers = db.Suppliers;

module.exports = async (data) => {
  const supplier = await Suppliers.findOne({
    where: { id: data.id },
  });
  if (!supplier) throw new Error("supplier not found");

  const supplierUpdated = await supplier.update(info);
  return supplierUpdated;
};
