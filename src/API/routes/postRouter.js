const { Router } = require("express");
const {createPostHandler, createPostItemHandler} = require('../handlers/postsHandlers')
const postRouter = Router();

postRouter.post("/", createPostHandler);

postRouter.post("/add", createPostItemHandler);

module.exports = postRouter;