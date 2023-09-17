const { db } = require("../../db");
const { Products } = db;

module.exports = async (id) => {
    const product = await Products.findByPk(id);
    if (!product) throw new Error(`No product found with id: ${id}`);
    return product;
};