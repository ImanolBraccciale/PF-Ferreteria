import getUser from '../controllers/User/getUser';
import getUserById from '../controllers/User/getUserById';
import getUserByName from '../controllers/User/getUserByName';
import deleteUser from '../controllers/User/deleteUser';
import deleteLogic from '../controllers/User/deleteLogic';
import editUser from '../controllers/User/editUser';
import postUser from '../controllers/User/postUser';

export default async (req, res) => {
    const {
        query: { id, name },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                if (id) {
                    const userById = await getUserById(id);
                    return res.status(200).json(userById);
                } else if (name) {
                    const userByName = await getUserByName(name);
                    return res.status(200).json(userByName)
                } else {
                    const allUsers = await getUser();
                    return res.status(200).json(allUsers);
                }
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        case 'POST':
            try {
                const newUser = await postUser(req.body)
                console.log(newUser);
                return res.status(200).json(newUser)
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'PUT':
            try {
                const userUpdated = await editUser(req.body)
                return res.status(200).json(userUpdated)
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case "DELETE":
            try {
                const { id, permanently } = req.body
                if (permanently === true) {
                    const delProduct = await deleteUser(id)
                    return res.status(201).json(delProduct)
                } else {
                    const delProduct = await deleteLogic(id)
                    return res.status(201).json(delProduct)
                }
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }

        default:
            break;
    }
}