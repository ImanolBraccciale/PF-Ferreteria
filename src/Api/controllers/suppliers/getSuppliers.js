const { db } = require("../../db");

const { Suppliers } = db;

export default async () => {
  return await Suppliers.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};
