const {db} = require("../../db")
db.sequelize.sync()
const Tag = db.Tag
const Products=db.Products

module.exports = async (tagName) =>{

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

}