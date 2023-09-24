const { db } = require("../../db");
db.sequelize.sync();
const Users = db.Users;

module.exports = async (data) => {
    const existUser = await Users.findOne({
        where: {
            nameUser: data.nameUser,
        },
    });
    if (existUser) throw new Error(`User ${data.name} already exists`);
    else {
        const newUser = await Users.create(data);
        return newUser;
    }
};