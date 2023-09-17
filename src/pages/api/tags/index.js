const postTag = require("../controllers/Tags/postTags")
export default async  function Handler(req, res){

  switch (req.method) {
    // case 'GET':
    //   try {
    //     const allProducts = await getProducts();
    //     return res.status(200).json( allProducts);
    //   } catch (error) {
    //     return res.status(400).json({ error: error.message });
    //   }
    case "POST":
      try {
 
        const newTag = await postTag(req.body); 
        return res.status(201).json(newProduct);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
      // case "DELETE":
      //   try {
      //     const { id } = req.body
      //     const delProduct = await deleteProduct(id)
      //     return res.status(201).json(delProduct)
      //   } catch (error) {
      //     return res.status(400).json({error:error.message})
      //   }

    default:
      break;
  }
};
