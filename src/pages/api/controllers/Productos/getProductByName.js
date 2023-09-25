const { db } = require("../../db");
const { Products } = db;

module.exports = async (name) => {
    const product = await Products.findOne({ where: { name: name } });
    if (!product) throw new Error(`no se ha encontrado el producto ${name}`);
    

    return [product.toJSON()];
};