const {db} =require("../../db")
db.sequelize.sync()
const Products = db.Products

module.exports = async (data) =>{
  const product =await Products.findOne(
    {where:
    {id:data.id}
  })
  if(!product) throw new Error("producto no encontrado")

  const productUpdated = await product.update(data)
  return productUpdated

}