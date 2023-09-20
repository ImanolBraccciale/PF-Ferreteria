const { db } = require("../../db");
db.sequelize.sync();

const Products = db.Products;
const Tag = db.Tag;
const Suppliers=db.Suppliers

module.exports = async (data) => {
  try {
    const { name, descripcion, costoAnterior, costoActual, price, stock, isActive, group, rubro, supplierName } = data;

    // Buscar las etiquetas de grupo y rubro por sus nombres
    const groupTag = await Tag.findOne({
      where: {
        name: group,
      },
    });

    const rubroTag = await Tag.findOne({
      where: {
        name: rubro,
      },
    });

    if (!groupTag || !rubroTag) {
      throw new Error("Una o ambas etiquetas no existen");
    }

       const supplier = await Suppliers.findOne({
      where: {
        name: supplierName,
      },
    });

    const newProduct = await Products.create({
      name: name,
      descripcion: descripcion,
      costoAnterior: costoAnterior,
      costoActual: costoActual,
      price: price,
      stock: stock,
      isActive: isActive,
      groupTagId: groupTag.id, 
      rubroTagId: rubroTag.id, 
      SupplierId: supplier.id_suppliers
    });


    const groupName = groupTag.name;
    const rubroName = rubroTag.name;
    const supplierADD =supplier.name

    const responseObject = {
      id: newProduct.id,
      name: newProduct.name,
      descripcion: newProduct.descripcion,
      costoAnterior: newProduct.costoAnterior,
      costoActual: newProduct.costoActual,
      price: newProduct.price,
      stock: newProduct.stock,
      isActive: newProduct.isActive,
      group: groupName, 
      rubro: rubroName, 
      supplier:supplierADD
    };

    return responseObject;
  } catch (error) {
    throw new Error(`Error al crear el producto: ${error.message}`);
  }
};
