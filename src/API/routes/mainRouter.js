const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postRouter = require("./postRouter");
const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postRouter);

module.exports = mainRouter;