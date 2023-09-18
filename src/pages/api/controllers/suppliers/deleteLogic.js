import { db } from "../../db";
const { Suppliers } = db;

module.exports = async (id, permanently) => {
  const supplierUpDate = await Suppliers.findByPk(id, permanently);
  if (!supplierUpDate)
    throw new Error(`Supplier whit id ${id} not exists or is undefined`);
  await Suppliers.update(
    { isActive: false },
    {
      where: {
        id: id,
        isActive: true,
      },
    }
  );

  return supplierUpDate;
};

// const { db } = require("../../db");
// db.sequelize.sync();
// const Suppliers = db.Suppliers;

// module.exports = async (id) => {
//   await Suppliers.update(
//     { isActive: false },
//     {
//       where: {
//         id: id,
//         isActive: true,
//       },
//     }
//   );
// };
