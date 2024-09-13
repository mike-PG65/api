import express from 'express'
import { getUser, findUser, createUser, deleteUser, editUser } from '../controllers/users.js';


const router = express.Router();



router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)

export default router;