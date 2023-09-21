const { db } = require("../../db");
const Products = db.Products;
const Tag = db.Tag;
const Suppliers = db.Suppliers;

module.exports = async () => {
  const products = await Products.findAll({
    include: [
      {
        model: Tag,
        as: 'groupTag',
        attributes: ['name'],
        required: false,
      },
      {
        model: Tag,
        as: 'rubroTag',
        attributes: ['name'],
        required: false,
      },
      {
        model: Suppliers,
        as: 'supplier',
        attributes: ['name'],
      },
    ],
    attributes: {
      exclude: ['groupTagId', 'rubroTagId'],
    },
  });

  const transformedProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    descripcion: product.descripcion,
    costoAnterior: product.costoAnterior,
    costoActual: product.costoActual,
    price: product.price,
    stock: product.stock,
    isActive: product.isActive,
    group: product.groupTag ? [product.groupTag.name] : [], 
    rubro: product.rubroTag ? [product.rubroTag.name] : [], 
    supplier: product.supplier ? [product.supplier.name] : [], 
  }));

  return transformedProducts;
};
