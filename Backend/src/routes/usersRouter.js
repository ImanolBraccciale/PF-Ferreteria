const { Router } = require("express");
const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).send("Todos los Usuarios.");
});

usersRouter.get("/:id", (req, res) => {
  res.status(200).send("Detalle de los Usuarios.");
});

module.exports = usersRouter;
