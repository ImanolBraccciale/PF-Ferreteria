const { db } = require("../../db");
const { Products, Tag,Suppliers } = db;

module.exports = async (name) => {
  const productWithTags = await Products.findOne({
    where: { name: name },
    include: [
      {
        model: Tag,
        through: {
          attributes: [], 
        },
        attributes: ['name'], 
      },
      {
        model: Suppliers, // Incluye la relación con el proveedor
        as: 'supplier', // Asegura que esté utilizando el alias correcto
        attributes: ['name'], // Incluye solo el nombre del proveedor
      },
    ],
  });
  //console.log(productWithTags);
  if (!productWithTags) {

    return null;
  }

  const group = productWithTags.Tags[0]?.name || ''; 
  const rubro = productWithTags.Tags[1]?.name || ''; 


  const reformattedProduct = {
    id: productWithTags.id,
    name: productWithTags.name,
     image:productWithTags.image,
    imageID:productWithTags.imageID,
    descripcion: productWithTags.descripcion,
    costoAnterior: productWithTags.costoAnterior,
    costoActual: productWithTags.costoActual,
    price: productWithTags.price,
    stock: productWithTags.stock,
    isActive: productWithTags.isActive,
    group,
    rubro,
    supplierName: productWithTags.supplier.name,
  };

  return [reformattedProduct];
};
