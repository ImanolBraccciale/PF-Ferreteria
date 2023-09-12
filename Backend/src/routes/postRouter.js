const { Router } = require("express");
const postRouter = Router();

postRouter.post("/", (req, res) => {
  res.status(200).send("Crear Usuario.");
});

postRouter.post("/add", (req, res) => {
  res.status(200).send("Agregar un elemento");
});

module.exports = postRouter;
