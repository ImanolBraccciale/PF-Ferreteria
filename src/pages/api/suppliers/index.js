const getSuppliers = require("../controllers/suppliers/getSuppliers");
const postSuppliers = require("../controllers/suppliers/postSuppliers");
const deleteSuppliers = require("../controllers/suppliers/deleteSuppliers");
const deleteUpSuppliers = require("../controllers/suppliers/deleteUpSuppliers");
const upSuppliers = require("../controllers/suppliers/upSuppliers");

const handlerSuppliers = async (req, res) => {
  console.log("pasando por el handler suppliers");
  const { method, body } = req;

  try {
    if (method === "GET") {
      const response = await getSuppliers();
      res.status(200).json(response);
    } else if (method === "POST") {
      const { name, cellphone, name_company, isActive } = body;
      if (!name || !cellphone || !name_company || !isActive) {
        res
          .status(400)
          .json({ error: "You must enter all the requested data" });
        return;
      }
      const response = await postSuppliers(body);
      res.status(200).json(response);
    } else if (method === "PUT") {
      const upDate = await upSuppliers(req.body);
      res.status(200).json(upDate);
    } else if (method === "DELETE") {
      const { id, permanently } = req.body;

      if (permanently === true) {
        const deletSupplier = await deleteSuppliers(id);
        return res.status(201).json(deletSupplier);
      } else {
        const deletSupplier = await deleteUpSuppliers(id);
        return res.status(201).json(deletSupplier);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handlerSuppliers;
