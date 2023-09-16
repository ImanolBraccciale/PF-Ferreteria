const {db} =require("../../db")
db.sequelize.sync()
const Products = db.Products

module.exports = async(id) =>{
  const productDelet = await Products.findByPk(id)

  if (!productDelet) {
    throw new Error ("El producto no existe")
  }

  await Products.update(
    {isActive:false},
    {where:{
      id:id,
      isActive:true
    }}
  )
  return productDelet
}