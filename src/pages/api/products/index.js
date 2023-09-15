const getProducts =require("../controllers/Productos/getProducts")
const postProducts = require("../controllers/Productos/postProduct")


export default async  function Handler(req, res){
  console.log("aaaaaaaaaaaaaaaaa");
  switch (req.method) {
    case 'GET':
      try {
        // const allProducts = await getProducts();
        return res.status(200).json({msj:"es una mierda"});
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    case "POST":
      try {
        console.log("prueba 1");
        const newProduct = await postProducts(req.body); 
        return res.status(201).json(newProduct);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    default:
      break;
  }
};
