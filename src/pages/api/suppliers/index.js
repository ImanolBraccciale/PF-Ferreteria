import getSuppliers from "../controllers/suppliers/getSuppliers";
import postSuppliers from "../controllers/suppliers/postSuppliers";
import deleteSuppliers from "../controllers/suppliers/deleteSuppliers";
import deleteLogic from "../controllers/suppliers/deleteLogic";
import putSuppliers from "../controllers/suppliers/putSuppliers";

const handlerSuppliers = async (req, res) => {
  const { method, body } = req;

  try {
    switch (method) {
      case "GET":
        const responseGet = await getSuppliers();
        res.status(200).json(responseGet);
        break;

      case "POST":
        const { name, cellphone, name_company, direction, email, isActive } =
          body;
        if (
          !name ||
          !cellphone ||
          !name_company ||
          !direction ||
          !email ||
          !isActive
        ) {
          res
            .status(400)
            .json({ error: "You must enter all the requested data" });
          break;
        }
        const responsePost = await postSuppliers(body);
        res.status(200).json(responsePost);
        break;

      case "PUT":
        const responsePut = await putSuppliers(req.body);
        res.status(200).json(responsePut);
        break;

      case "DELETE":
        const { id, permanently } = req.body;
        const deleteFunction = permanently ? deleteSuppliers : deleteLogic;
        const deleteSupplier = await deleteFunction(id);
        res.status(201).json(deleteSupplier);
        break;

      default:
        res.status(400).json({ error: "Invalid method" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handlerSuppliers;

/*const handlerSuppliers = async (req, res) => {
  //console.log("pasando por el handler suppliers");
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
      const upDate = await putSuppliers(req.body);
      res.status(200).json(upDate);
    } else if (method === "DELETE") {
      const { id, permanently } = req.body;

      if (permanently === true) {
        const deletSupplier = await deleteSuppliers(id);
        return res.status(201).json(deletSupplier);
      } else {
        const deletSupplier = await deleteLogic(id);
        return res.status(201).json(deletSupplier);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handlerSuppliers;*/
