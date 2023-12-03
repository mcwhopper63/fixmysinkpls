import { Router } from 'express';

import {
    getUser,
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
} from '../controllers/userController.js';

const router = Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
