const postSale = require("../controllers/Sales/postSales")

export default async  function Handler(req, res){

  switch (req.method) {

    case "POST":
      try {
        const newSale = await postSale(req.body)
        return res.status(201).json(newSale)
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }

    default:
      break;
  }
};
