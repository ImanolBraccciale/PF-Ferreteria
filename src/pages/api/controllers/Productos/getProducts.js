const {db} =require("../../db")
db.sequelize.sync()
const Products = db.Products

module.exports = async () =>{
  const products =await Products.findAll()
  return products
}