const getProducts =require("../controllers/Productos/getProducts")
const postProducts = require("../controllers/Productos/postProduct")
const deleteProduct = require("../controllers/Productos/delete")
const updateProduct = require("../controllers/Productos/upProducts")
export default async  function Handler(req, res){
  console.log("aaaaaaaaaaaaaaaaa");
  switch (req.method) {
    case 'GET':
      try {
        const allProducts = await getProducts();
        return res.status(200).json( allProducts);
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
      case "DELETE":
        try {
          const { id } = req.body
          const delProduct = await deleteProduct(id)
          return res.status(201).json(delProduct)
        } catch (error) {
          return res.status(400).json({error:error.message})
        }
        case "PUT":
          try {
            const updateP = await updateProduct(req.body)
            return res.status(201).json(updateP)
          } catch (error) {
            return res.status(400).json({error:error.message})
          }
    default:
      break;
  }
};
