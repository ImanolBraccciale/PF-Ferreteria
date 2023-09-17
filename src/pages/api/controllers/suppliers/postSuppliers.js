const { db } = require("../../db");
db.sequelize.sync();
const Suppliers = db.Suppliers;

module.exports = async (data) => {
  //console.log("creando Proveedor");
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
//export default postSuppliers;

//!modelo para post sin el id. esta es la data traida por el get:
/*{
    "id_suppliers": "b7fc56d5-e693-4bb1-b6c4-c0ad07c2b939",
    "name": "Amder Dev",
    "cellphone": "(054)658-53-95",
    "name_company": "La casa vieja",
    "isActive": true
  }*/
