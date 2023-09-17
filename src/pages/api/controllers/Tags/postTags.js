const {db} = require("../../db")
db.sequelize.sync()
const Tag = db.Tag

module.exports = async (data) =>{
  const newProduct = Tag.create(data)
  return newProduct
}