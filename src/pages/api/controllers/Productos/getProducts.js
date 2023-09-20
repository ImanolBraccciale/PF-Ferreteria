const { db } = require("../../db");
const Products = db.Products;
const Tag = db.Tag; // Importar el modelo Tag
const Suppliers = db.Suppliers; // Importar el modelo Suppliers

module.exports = async () => {
  const products = await Products.findAll({
    include: [
      {
        model: Tag,
        as: 'groupTag',
        attributes: ['name'],
        required: false, // Usar required: false para que sea una consulta LEFT JOIN
      },
      {
        model: Tag,
        as: 'rubroTag',
        attributes: ['name'],
        required: false, // Usar required: false para que sea una consulta LEFT JOIN
      },
      {
      model: Suppliers,
      as: 'supplier',
      attributes: ['name']
      },
    ],
    attributes: {
      exclude: ['groupTagId', 'rubroTagId'], // Excluir los IDs de los tags
    },
  });

  return products; // Asegúrate de devolver los productos recuperados
};
