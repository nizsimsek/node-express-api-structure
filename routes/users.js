import express from 'express';

import {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
} from '../controllers/users.js';


const router = express.Router();


router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUserById);
router.patch('/:id', updateUserById)
router.delete('/:id', deleteUserById);

export default router;