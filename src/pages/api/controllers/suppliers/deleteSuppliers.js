import { db } from "../../db";
const { Suppliers } = db;

module.exports = async (id, permanently) => {
  const supplierUpDate = await Suppliers.findByPk(id);
  if (!supplierUpDate) throw new Error(`Supplier whit id ${id} not exists`);
  await Suppliers.destroy({
    where: { id: id },
  });
  return supplierUpDate;
};
