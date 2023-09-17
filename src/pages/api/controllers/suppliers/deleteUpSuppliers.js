const { db } = require("../../db");
db.sequelize.sync();
const Suppliers = db.Suppliers;

module.exports = async (id) => {
  await Suppliers.update(
    { isActive: false },
    {
      where: {
        id: id,
        isActive: true,
      },
    }
  );
};
