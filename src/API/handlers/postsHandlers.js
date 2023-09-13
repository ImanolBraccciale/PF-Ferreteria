const createPostHandler = (req, res) => {
  res.status(200).send("Crear Usuario.");
};

const createPostItemHandler = (req, res) => {
  res.status(200).send("Agregar un elemento");
};

module.exports = { createPostHandler, createPostItemHandler };
