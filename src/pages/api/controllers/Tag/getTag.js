const { db } = require("../../db")
db.sequelize.sync()
const Tag = db.Tag
const Products = db.Products

module.exports = async (tagName) => {

  try {
    const tag = await Tag.findAll(
    //   {
    //   where: {
    //     name: tagName
    //   }
    // }
    )

    // if (tag) {
    //   const products = await Tag.findAll({
    //     where: {
    //       TagId: tag.id
    //     }
    //   })
    //   return products;
    // }
    return tag
  } catch (error) {
    throw new Error({ error: error.message })
  }

}