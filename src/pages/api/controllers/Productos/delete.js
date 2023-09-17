const {db} =require("../../db")
db.sequelize.sync()
const Products = db.Products

module.exports = async(id,permanently) =>{
  if (permanently) {
    await Products.update(
      {isActive:false},
      {where:{
        id:id,
        isActive:true
      }}
    )
  }else {
   await Products.destroy(
    {where:{
      id:id,
    }}
  )
  }
}