import { db } from "../../db";
const { Suppliers } = db;

const deleteSuppliers = async (id) => {
  const supplier = await Suppliers.findByPk(id);
  if (!supplier) throw new Error("unknow Supplier");
  await Suppliers.destroy({
    where: { id: id },
  });
  return supplier;
};

export default deleteSuppliers;
