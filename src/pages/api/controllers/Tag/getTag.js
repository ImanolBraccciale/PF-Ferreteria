const { db } = require("../../db")
db.sequelize.sync()
const Tag = db.Tag
const Products = db.Products

module.exports = async (tagName) => {

<<<<<<< HEAD
 try {
   const tag = await Tag.findAll()
  // const tag = await Tag.findOne({
  //   where:{
  //     name:tagName
  //   }
  // })

  // if (tag) {
  //   const products =await Products.findAll({
  //     where:{
  //       TagId:tag.id
  //     }
  //   })
    return tag;

 } catch (error) {
  throw new Error({error:error.message})
 }
=======
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
>>>>>>> 9949d98c7eb97afc3ca6290f7a09a7d80d124dc3

}