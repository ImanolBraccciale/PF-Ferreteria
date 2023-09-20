const { db } = require("../../db");
const { Users } = db;

module.exports = async (name) => {
    const user = await Users.findOne({ where: { name: name } });
    if (!user) throw new Error(`No user found with name: ${name}`);
    return user;
};
