const { db } = require("../../db");
db.sequelize.sync();
const Suppliers = db.Suppliers;

module.exports = async (data) => {
  const existSupplier = await Suppliers.findOne({
    where: {
      name: data.name,
    },
  });
  if (existSupplier) throw new Error(`Supplier ${data.name} already exists`);
  else {
    const newSupplier = await Suppliers.create(data);
    return newSupplier;
  }
};
