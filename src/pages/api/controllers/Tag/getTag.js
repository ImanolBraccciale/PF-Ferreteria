const {db} = require("../../db")
db.sequelize.sync()
const Tag = db.Tag

module.exports = async () =>{

  const tags = Tag.findAll()

  return tags
}