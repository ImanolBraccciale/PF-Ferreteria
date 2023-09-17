const { db } = require("../../db");
db.sequelize.sync();
const Users = db.Users;

module.exports = async (data) => {
    const existUser = await Users.findOne({
        where: {
            name: data.name,
        },
    });
    if (existUser) throw new Error(`User ${data.name} already exists`);
    else {
        const newUser = await Users.create(data);
        return newUser;
    }
};