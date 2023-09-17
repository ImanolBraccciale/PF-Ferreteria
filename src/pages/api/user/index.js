import getUser from '../controllers/User/getUser';
import getUserById from '../controllers/User/getUserById';
import deleteUser from '../controllers/User/deleteUser';
import editUser from '../controllers/User/editUser';
import postUser from '../controllers/User/postUser';

export default async (req, res) => {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                if (id) { 
                    const user = await getUserById(id);
                    return res.status(200).json(user);
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
        case 'DELETE':
            try {
                const { id } = req.body;
                const userDelete = await deleteUser(id);
                return res.status(200).json(userDelete);
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }

        default:
            break;
    }
}