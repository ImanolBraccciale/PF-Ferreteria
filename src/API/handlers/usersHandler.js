const getUsersHandler = (req, res) => {
  res.status(200).send("Todos los Usuarios.");
};

const getDetailHandler = (req, res) => {
  res.status(200).send("Detalle de los Usuarios.");
};

const createUserHandler = (req, res) => {
  res.status(200).send("Crear Usuario.");
};

const createItemHandler = (req, res) => {
    res.status(200).send("Agregar un elemento");
  };

module.exports = {
  getUsersHandler,
  getDetailHandler,
  createUserHandler,
  createItemHandler,
};
