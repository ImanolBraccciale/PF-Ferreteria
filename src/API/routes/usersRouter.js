const { Router } = require("express");
const {
  getDetailHandler,
  getUsersHandler,
  createUserHandler,
  createItemHandler,
} = require("../handlers/usersHandler");
const usersRouter = Router();

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getDetailHandler);
usersRouter.post('/', createUserHandler);
usersRouter.post('/add', createItemHandler);

module.exports = usersRouter;
