const {db} = require("../../db")
db.sequelize.sync()
const Products = db.Products

module.exports = async (data) =>{
  console.log("estoy en post");
  const newProduct = Products.create(data)
  console.log("estoy en create");
  return newProduct
}