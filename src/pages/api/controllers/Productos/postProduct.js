const { db } = require("../../db");
db.sequelize.sync(); 

const Products = db.Products;
const Tag = db.Tag;

module.exports = async (data) => {
  try {

    const tag = await Tag.findOne({
      where: {
        name: data.TagId,
      },
    });

    if (tag) {

      const newProduct = await Products.create({
        ...data,
        TagId: tag.id,
      });

      return newProduct;
    } else {
      throw new Error("La etiqueta no existe");
    }
  } catch (error) {
    throw new Error(`Error al crear el producto: ${error.message}`);
  }
};
