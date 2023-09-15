const db =require("../../db")
const {Products} = db
module.exports = async () =>{

  const products =await Products.findAll()

  
}